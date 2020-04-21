import React from 'react';
import { Button, Box, Spinner } from '@chakra-ui/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core';

import FormStatusEnum from './FormStatusEnum';
import { getTitle } from './utils';

type Props = {
  status: number;
  message: string;
  isOpen: boolean;
  onAbort: () => void;
  onClose: () => void;
  finalFocusRef:  any;
};

const SendFormDataModal = ({ status, message, isOpen, onAbort, onClose, finalFocusRef }: Props) => {
  const title = getTitle(status, '');

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} finalFocusRef={finalFocusRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {status !== FormStatusEnum.Sending && <ModalCloseButton />}

        <ModalBody pb={6}>
          {status === FormStatusEnum.Sending && <Spinner />}
          <Box>{message}</Box>
        </ModalBody>

        <ModalFooter>
          <Button onClick={status === FormStatusEnum.Sending ? onAbort : onClose}>
            {status === FormStatusEnum.Sending ? 'Отменить' : 'Закрыть'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SendFormDataModal;
