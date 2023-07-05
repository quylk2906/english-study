import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
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
} from '@chakra-ui/react';
import { Data, vocabularies } from './data';
import { ArrowForwardIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';

const PAGE_SIZE = 50;

function App() {
  const [page, setPage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentVocabularies, setCurrentVocabularies] = useState<Data[]>(
    vocabularies.slice(0, 2)
  );
  const [activeCard, setActiveCard] = useState(0);
  const firstFieldRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    setCurrentVocabularies(
      vocabularies.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
    );
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentVocabularies]);

  const word = useMemo(() => {
    return currentVocabularies[activeCard].word.split(' ')[0];
  }, [activeCard, currentVocabularies]);

  useEffect(() => {
    if (!isOpen) {
      firstFieldRef.current[activeCard].focus();
    }
  }, [isOpen, activeCard]);

  const handlePlaySound = () => {
    const audio = new Audio(`public/resources/${word}.mp3`);
    audio.play();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.code === 'Space') {
      onOpen();
      return;
    }
    if (event.shiftKey && event.code === 'Space') {
      event.preventDefault();
      handlePlaySound();
      return;
    }

    const value = (event.target as any).value.trim();
    if (event.key === 'Enter' && value) {
      if (value === currentVocabularies[activeCard].word) {
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
      <Center mb={8}>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Center>

      <SimpleGrid
        columns={{ md: 1, xl: 2 }}
        spacingX={{ xl: 4, '2xl': 6 }}
        spacingY="40px"
      >
        {currentVocabularies.map((el, idx) => {
          const [realWord] = el.word.split(' ');
          return (
            <Card
              key={idx}
              border={el.checked ? '2px' : '1px'}
              borderColor={
                el.checked ? 'green.500' : el.error ? 'red.500' : 'gray.200'
              }
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
                    {el.checked ? (
                      <Heading
                        size="xs"
                        textTransform="uppercase"
                        ml={3}
                        color={'#2c82c9'}
                      >
                        {el.word}
                      </Heading>
                    ) : (
                      <InputGroup borderRadius={4} overflow="hidden">
                        <Input
                          ref={(elRef) =>
                            elRef && (firstFieldRef.current[idx] = elRef)
                          }
                          placeholder="📝 📝"
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
                            objectFit="cover"
                            src={`public/resources/${realWord}.jpg`}
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
                    onClick={handlePlaySound}
                  />
                </Flex>

                <Box ml={5} mt={2}>
                  {el.description.map((desc, idxDes) => (
                    <Text key={idxDes} fontSize={'sm'} color={'gray.500'}>
                      - {desc}
                    </Text>
                  ))}
                </Box>

                <List mt={2}>
                  {el.sentences.map((sentence, idx2) => {
                    const [currentWord] = el.word.split(' ');
                    const reg = new RegExp(
                      `(\\b${currentWord.slice(0, -2)}\\w*\\b)`,
                      'gi'
                    );
                    const words = sentence.split(reg);
                    return (
                      <ListItem key={idx2}>
                        <ListIcon
                          as={ArrowForwardIcon}
                          color="gray.500"
                          fontSize={12}
                          verticalAlign={'baseline'}
                        />
                        {words.map((word, idx3) =>
                          idx3 === 1 ? (
                            el.checked ? (
                              <Text
                                fontWeight={500}
                                as="span"
                                color={'#2c82c9'}
                              >
                                {word}
                              </Text>
                            ) : (
                              <Text
                                as="span"
                                color={'gray.500'}
                                letterSpacing={4}
                              >
                                .....
                              </Text>
                            )
                          ) : (
                            word
                          )
                        )}
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
          (_, el) => (
            <Button
              key={el}
              size="sm"
              variant={el === page ? 'solid' : 'outline'}
              borderWidth={el === page ? '' : '2px'}
              colorScheme={el === page ? 'facebook' : undefined}
              onClick={() => setPage(el)}
            >
              {el + 1}
            </Button>
          )
        )}
      </Flex>
      {/* <WelcomeModal /> */}
    </Box>
  );
}

export default App;
