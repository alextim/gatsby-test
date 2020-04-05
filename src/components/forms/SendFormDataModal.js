import React from 'react'
import { Button, Box, Spinner } from '@chakra-ui/core'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/core'


export default ({ title, isOpen, onAbort, onClose, status, finalFocusRef }) => (
  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} finalFocusRef={finalFocusRef}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      {!status.wait && <ModalCloseButton />}

      <ModalBody pb={6}>
        {status.wait && <Spinner />}

        <Box>{status.message}</Box>

      </ModalBody>

      <ModalFooter>
        <Button onClick={status.wait ? onAbort : onClose}>
          {status.wait ? 'Отменить' : 'Закрыть'}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)
