import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core'

import { Button } from '@chakra-ui/core'

import { BaseformContext } from './BaseformContext'
import InquiryForm from './InquiryForm'


export default ({ isOpen, onClose }) => {
  const {
    //handleSubmit,
    //setError,
    //reset,
    register,
    errors,    
  } = useForm()
  const focusRef = useRef()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="96%">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={()=>alert('hello')} method="post">
            <BaseformContext.Provider value={{errors, register, focusRef}}>
              <InquiryForm />
            </BaseformContext.Provider>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}