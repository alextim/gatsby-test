import React from 'react'
import { Button } from '@chakra-ui/core'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/core'

  export default ({isOpen, setIsOpen, onAbort}) => {
    const onClose = () => setIsOpen(false)
    const onAbortClick = () => {
        onAbort()
        onClose()
    }
    const cancelRef = React.useRef()
    
    return (

        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay />
            <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
            </AlertDialogHeader>
    
            <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
    
            <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                <Button variantColor="red" onClick={onAbortClick} ml={3}>Delete</Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}