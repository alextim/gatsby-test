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


export default ({ title, isOpen, onClose, status }) => {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          { !status.wait && <ModalCloseButton /> }

          <ModalBody pb={6}>
            { status.wait && <Spinner /> }
            
            <Box>{status.message}</Box>

          </ModalBody>

          <ModalFooter>
            { !status.wait && <Button onClick={onClose}>Закрыть</Button> }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}