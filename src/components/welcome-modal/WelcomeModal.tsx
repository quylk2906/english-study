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

const USER = 'user';

export const WelcomeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef<any>(null);

  useEffect(() => {
    if (isEmpty(localStorage.getItem(USER))) {
      onOpen();
    }
  }, []);

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    if (!initialRef.current!.value) return;
    console.log(initialRef.current!.value);
    localStorage.setItem(USER, initialRef.current!.value);
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
