/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient';
import { useWordsStore } from '../../stores/vocabulary-store';

const USER = 'user';

export const WelcomeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef<any>(null);
  const { setUserData } = useWordsStore();
  const userName = localStorage.getItem(USER);

  useEffect(() => {
    if (isEmpty(userName)) {
      onOpen();
    } else {
      getInitSupaBaseData();
    }
  }, [userName]);

  const getInitSupaBaseData = async (user?: string) => {
    const _userName = user ?? userName ?? '';
    const { data } = await supabase
      .from('user_vocabulary')
      .select('*')
      .eq('name', _userName);
    setUserData({
      name: _userName,
      savedWords: data?.[0]?.data,
    });
  };

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (!initialRef.current!.value) return;
    localStorage.setItem(USER, initialRef.current!.value);
    getInitSupaBaseData(initialRef.current!.value);
    onClose();
  };

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit} id="my-form">
            <Input autoFocus ref={initialRef} placeholder="Enter your name" />
          </form>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit" form="my-form">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
