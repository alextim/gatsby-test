import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/core';

import SendFormDataModal from './SendFormDataModal';
import { IBaseformContext, BaseformContext } from './BaseformContext';
import FormStatusEnum from './FormStatusEnum';
import { MODAL_CLOSE_DELAY } from './formUtils';

const MESSAGE_SENDING = 'Пожалуйста подождите';
const MESSAGE_SUCCESS = 'Данные сохранены.';
const MESSAGE_ERROR = 'Данные не сохранены. Пожалуйста повторите вашу попытку позже';

const InlineForm = ({ sendData, msgSending, msgSuccess, msgError, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    // setError,
    reset,
    register,
    errors,
    control,
  } = useForm();

  const [status, setStatus] = useState(FormStatusEnum.Sending);
  const [message, setMessage] = useState('');
  const focusRef = useRef();

  const close = () => {
    onClose();
    focusRef.current && focusRef.current.focus();
  };

  const waitAndClose = () => setTimeout(() => close(), MODAL_CLOSE_DELAY);

  sendData.onSend = () => {
    setStatus(FormStatusEnum.Sending);
    setMessage(msgSending || MESSAGE_SENDING);
    onOpen();
  };

  sendData.onSuccess = () => {
    setStatus(FormStatusEnum.Success);
    setMessage(msgSuccess || MESSAGE_SUCCESS);
    waitAndClose();
    reset();
  };

  sendData.onCancel = () => {
    setStatus(FormStatusEnum.Cancelled);
    setMessage('Отменено пользователем');
    waitAndClose();
  };

  sendData.onError = (error) => {
    setStatus(FormStatusEnum.Error);
    // setError('submit', 'submitError', msg );
    const msg = `${msgError || MESSAGE_ERROR}\n${error.message}`;
    setMessage(msg);
    waitAndClose();
  };

  const cancel = () => sendData.cancel();

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendData.send(data);
  };

  const context: IBaseformContext = {
    errors,
    register,
    control,
    focusRef,
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <BaseformContext.Provider value={context}>{children}</BaseformContext.Provider>
      </form>
      <SendFormDataModal
        message={message}
        status={status}
        isOpen={isOpen}
        finalFocusRef={focusRef}
        onAbort={cancel}
        onClose={onClose}
      />
    </>
  );
};

export default InlineForm;
