import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/core';

import SendFormDataModal from './SendFormDataModal';
import { BaseformContext } from './BaseformContext';


const SHOW_MODAL_DURATION = 3000;

const MESSAGE_PROCESSING = 'Отправка данных. Пожалуйста подождите';
const MESSAGE_DONE       = 'Данные сохранены.';
const MESSAGE_FAILURE    = 'Данные не сохранены. Пожалуйста повторите вашу попытку позже';


export default ({sendData, msgProcessing, msgDone, msgFailure, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    //setError,
    reset,
    register,
    errors,    
  } = useForm();
  const [status, setStatus] = useState({});
  const focusRef = useRef();

  sendData.onSend = () => {
    setStatus(() => ({ wait: true, message: msgProcessing || MESSAGE_PROCESSING }));
    onOpen();
  };
  
  sendData.onSuccess = () => {
    setStatus(() => ({ wait: false, message: msgDone || MESSAGE_DONE }));
    waitAndClose();
    reset();
  };

  sendData.onCancel = () => {
    setStatus(() => ({ wait: false, message: 'cancelled' }));
    waitAndClose();
  };

  sendData.onError = (error) => {
      //setError('submit', 'submitError', msg );
      setStatus(() => ({ wait: false, message: `${msgFailure || MESSAGE_FAILURE} ${error.message}` }));
      waitAndClose(); 
  };

  const cancel = () => sendData.cancel();

  const close = () => {
    onClose();
    focusRef.current && focusRef.current.focus();
  }; 

  const waitAndClose = () => setTimeout(() => close(), SHOW_MODAL_DURATION);

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendData.send(data);
  };

 
  return (
    <>    
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <BaseformContext.Provider value={{errors, register, focusRef}}>
          {children}
        </BaseformContext.Provider>
      </form>
      <SendFormDataModal title="Обработка данных" isOpen={isOpen} onClose={onClose} status={status} 
        finalFocusRef={focusRef}
        onAbort={cancel}
      />
    </>
  );
}