import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core';
import { Spinner, Button } from '@chakra-ui/core';

import { BaseformContext } from './BaseformContext';


export default ({ children, sendData, isOpen, onClose }) => {
  const {
    handleSubmit,
    //setError,
    //reset,
    register,
    errors,    
  } = useForm();

  const focusRef = useRef();
  const [status, setStatus] = useState('form');
  const [message, setMessage] = useState(null);
  
  const waitAndClose = () => {
    setTimeout(() => {
      onClose();
      setStatus('form');
    }, 5000);
  };

  sendData.onSend = () => {
    setStatus('sending');
    setMessage('Обработка данных. Пожалуйста, подождите.');
  };
  
  sendData.onSuccess = () => {
    setStatus('done');
    setMessage('ok');
    waitAndClose();
  };

  sendData.onCancel = () => {
    setStatus('done');
    setMessage('cancelled'); 
    waitAndClose();
  };

  sendData.onError = (error) => {
    setStatus('done'); 
    setMessage(`error: ${error}`);
    waitAndClose();
  };

  const cancel = () => sendData.cancel();

  const onSubmit = (data, e) => {
    e.preventDefault();

    sendData.send(data);
  };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={status === 'form' ?  "96%" : "sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Заявка</ModalHeader>
        {status !== 'sending' && <ModalCloseButton />}
        <ModalBody>
          {status === 'form' && 
              <form onSubmit={handleSubmit(onSubmit)} method="post">
                <BaseformContext.Provider value={{errors, register, focusRef}}>
                  {children}
                </BaseformContext.Provider>
              </form>
          }
          
          {status === 'sending' && <Spinner />}

          {status !== 'form' && <div>{message}</div>}
        </ModalBody>
        {status !== 'form' &&
          <ModalFooter>
            <Button onClick={ status === 'sending' ? cancel : onClose }>
              {status === 'sending' ? 'Отменить' : 'Закрыть'}
            </Button>
          </ModalFooter>
        }
      </ModalContent>
    </Modal>
  );
};