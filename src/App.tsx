import {
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import viteLogo from '/vite.svg';
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { vocabularies } from './data';
import {
  ArrowForwardIcon,
  CheckIcon,
  SunIcon,
  ViewIcon,
} from '@chakra-ui/icons';
import { getAudioUrl, getImageUrl, shuffleArray } from './helpers';
import { CopyText } from './components/CopyText';
import { Fragment } from 'react';
import { supabase } from './supabaseClient';
import { WelcomeModal } from './components/welcome-modal/WelcomeModal';
import { useWordsStore } from './stores/vocabulary-store';
import { uniq } from 'lodash';

const PAGE_SIZE = 40;

function App() {
  const p = new URLSearchParams(window.location.search).get('p');
  const [page, setPage] = useState(+(p ?? 1) - 1);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentVocabularies, setCurrentVocabularies] = useState<Data[]>(
    vocabularies.slice(0, 2)
  );
  const [activeCard, setActiveCard] = useState(0);
  const [revealAll, setRevealAll] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement[]>([]);
  const { userData } = useWordsStore();
  const savedWordsLocal = useRef<string[]>(userData.savedWords ?? []);

  useEffect(() => {
    setCurrentVocabularies(
      shuffleArray(
        vocabularies.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
      ).map((el) => {
        const hasSaved = userData.savedWords?.includes(el.word);
        if (hasSaved) {
          return {
            ...el,
            checked: true,
            error: false,
          };
        }
        return el;
      })
    );
    savedWordsLocal.current = userData.savedWords;
  }, [page, userData.savedWords]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const word = useMemo(() => {
    return currentVocabularies[activeCard].word.split(' (')[0];
  }, [activeCard, currentVocabularies]);

  useEffect(() => {
    if (!isOpen) {
      firstFieldRef.current[activeCard].focus();
    }
  }, [isOpen, activeCard]);

  const handlePlaySound = (selectedWord) => {
    const audio = new Audio(getAudioUrl(selectedWord));
    audio.play();
  };

  const showWord = useCallback(() => {
    toast({
      description: word,
      position: 'top',
      isClosable: true,
      variant: 'subtle',
      status: 'info',
      duration: 2000,
    });
  }, [word]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.ctrlKey && event.code === 'Space') {
        onOpen();
        event.preventDefault();
        return;
      }
      if (event.shiftKey && event.code === 'Space') {
        handlePlaySound(word);
        event.preventDefault();
        return;
      }

      if (event.altKey && event.code === 'Backspace') {
        showWord();
        event.preventDefault();
        return;
      }

      const value = String((event.target as any).value.trim()).toLowerCase();
      if (event.key === 'Enter' && value) {
        if (value === word) {
          setCurrentVocabularies((prevVal) => {
            const newVal = [...prevVal];
            newVal[activeCard] = {
              ...newVal[activeCard],
              checked: true,
              error: false,
            };
            return newVal;
          });
          firstFieldRef.current[activeCard + 1]?.focus();
        } else {
          setCurrentVocabularies((prevVal) => {
            const newVal = [...prevVal];
            newVal[activeCard] = {
              ...newVal[activeCard],
              checked: false,
              error: true,
            };
            return newVal;
          });
        }
      }
    },
    [activeCard, onOpen, word]
  );

  const handleCopy = useCallback(() => {
    toast({
      description: 'Copied',
      position: 'top',
      variant: 'subtle',
      status: 'success',
      duration: 2000,
    });
  }, []);

  const handleSaveSingleWord = async (newWord: string) => {
    savedWordsLocal.current = uniq([...savedWordsLocal.current, newWord]);
    await supabase
      .from('user_vocabulary')
      .update({ data: savedWordsLocal.current })
      .eq('name', userData.name);

    toast({
      description: (
        <Text>
          Saved <Text fontWeight={600}>{newWord}</Text>
        </Text>
      ),
      position: 'top',
      variant: 'subtle',
      status: 'success',
      duration: 2000,
    });
  };

  return (
    <Box
      paddingInline={{
        sm: 2,
        md: 8,
        xl: 16,
        '2xl': 20,
      }}
      paddingBlock="8"
    >
      <Center mb={8} onClick={() => setRevealAll(true)}>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Center>

      <SimpleGrid
        columns={{ md: 1, xl: 2 }}
        spacingX={{ xl: 4, '2xl': 6 }}
        spacingY="32px"
      >
        {currentVocabularies
          // .filter((item) => item.word === 'fed up')
          .map((el, idx) => {
            const [realWord] = el.word.split(' (');
            const hasSaved = savedWordsLocal.current.includes(realWord);
            return (
              <Card
                key={idx}
                border={'1px'}
                borderColor={el.error ? 'red.500' : 'gray.200'}
              >
                <CardBody padding={[2, 4, 5, 5]}>
                  <Flex columnGap={2} alignItems={'center'}>
                    <Box
                      flexGrow={1}
                      onClick={() => {
                        onClose();
                        if (activeCard !== idx) {
                          setActiveCard(idx);
                        }
                      }}
                    >
                      {el.checked || revealAll ? (
                        <CopyText
                          onClick={handleCopy}
                          text={el.word.toLowerCase()}
                        >
                          <Heading
                            size="xs"
                            textTransform="uppercase"
                            ml={3}
                            color={'#2c82c9'}
                          >
                            {el.word}
                          </Heading>
                        </CopyText>
                      ) : (
                        <InputGroup borderRadius={4} overflow="hidden">
                          <Input
                            ref={(elRef) =>
                              elRef && (firstFieldRef.current[idx] = elRef)
                            }
                            placeholder="📝"
                            variant="filled"
                            onKeyDown={handleKeyDown}
                            onFocus={() => {
                              if (activeCard !== idx) {
                                setActiveCard(idx);
                              }
                            }}
                          />
                        </InputGroup>
                      )}
                    </Box>
                    <Popover
                      placement="bottom-end"
                      isOpen={isOpen && activeCard === idx}
                      onOpen={onOpen}
                      onClose={onClose}
                      closeOnBlur={false}
                      returnFocusOnClose={false}
                      offset={[-180, 4]}
                    >
                      <PopoverTrigger>
                        <IconButton
                          aria-label="SunIcon"
                          icon={<ViewIcon />}
                          onClick={onOpen}
                          size={'sm'}
                        />
                      </PopoverTrigger>
                      <PopoverContent
                        _focusVisible={{
                          outline: '0',
                          boxShadow: 'unset',
                        }}
                      >
                        <PopoverBody
                          bgColor={'#ecf0f1'}
                          boxShadow={'md'}
                          width={500}
                        >
                          <Box>
                            <Image
                              height={200}
                              width={500}
                              objectFit="contain"
                              src={getImageUrl(realWord)}
                              fallbackSrc="https://via.placeholder.com/150"
                            />
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                    <IconButton
                      aria-label="SunIcon"
                      icon={<SunIcon />}
                      colorScheme="green"
                      onClick={() => handlePlaySound(realWord)}
                      size={'sm'}
                    />

                    {!hasSaved && (
                      <IconButton
                        colorScheme="facebook"
                        aria-label="CheckIcon"
                        icon={<CheckIcon />}
                        onClick={() => handleSaveSingleWord(el.word)}
                        size={'sm'}
                      />
                    )}
                  </Flex>

                  <Box ml={5} mt={2} onClick={showWord}>
                    {el.description.map((desc, idxDes) => (
                      <Text
                        key={idxDes}
                        fontSize={'sm'}
                        color={'gray.700'}
                        title={realWord}
                      >
                        - {el.checked ? desc.replaceAll('___', realWord) : desc}
                      </Text>
                    ))}
                  </Box>

                  <List>
                    {el.sentences.map((sentence, idx2) => {
                      const isLongWord = realWord.split(' ').length > 1;
                      const isShortWord = realWord.length <= 4;
                      // Normalize v-ing, v-ed
                      const verbReg = /(ing|ed|s|es|tic|ce)\b/g;
                      const reg = isLongWord
                        ? new RegExp(`(\\b${realWord}\\w*\\b)`, 'gi')
                        : isShortWord
                        ? new RegExp(`(\\b\\w*${realWord}\\w*\\b)`, 'gi')
                        : new RegExp(
                            `(\\b\\w*${realWord
                              .replace(verbReg, '')
                              .slice(0, -1)}\\w*\\b)`,
                            'gi'
                          );

                      const apartSentence = sentence.split(reg);
                      return (
                        <ListItem key={idx2} lineHeight={'20px'} mt={2}>
                          <ListIcon
                            as={ArrowForwardIcon}
                            color="gray.500"
                            fontSize={12}
                            verticalAlign={'baseline'}
                          />
                          <CopyText onClick={handleCopy}>
                            {apartSentence.map((part, idx3) =>
                              idx3 === 1 ? (
                                el.checked || revealAll ? (
                                  <Text
                                    key={idx3}
                                    fontWeight={500}
                                    as="span"
                                    color={'#2c82c9'}
                                  >
                                    {part}
                                  </Text>
                                ) : (
                                  <Text
                                    key={idx3}
                                    as="span"
                                    color={'gray.500'}
                                    letterSpacing={4}
                                  >
                                    .....
                                  </Text>
                                )
                              ) : (
                                <Fragment key={idx3}>{part}</Fragment>
                              )
                            )}
                          </CopyText>
                        </ListItem>
                      );
                    })}
                  </List>
                </CardBody>
              </Card>
            );
          })}
      </SimpleGrid>

      <Flex
        gap={2}
        wrap={'wrap'}
        justifyContent={['flex-start', 'center']}
        marginTop={8}
        paddingInline={8}
      >
        {Array.from({ length: Math.ceil(vocabularies.length / PAGE_SIZE) }).map(
          (_, idx) => {
            const nextPage = idx + 1;
            return (
              <Button
                key={idx}
                size="sm"
                variant={idx === page ? 'solid' : 'outline'}
                borderWidth={idx === page ? '' : '2px'}
                colorScheme={idx === page ? 'facebook' : undefined}
                onClick={() => {
                  setPage(idx);
                  const { origin, pathname } = window.location;
                  window.history.replaceState(
                    { p: nextPage },
                    `Page ${nextPage}`,
                    `${origin}${pathname}?p=${nextPage}`
                  );
                }}
              >
                {nextPage}
              </Button>
            );
          }
        )}
      </Flex>
      <WelcomeModal />
    </Box>
  );
}

export default App;
