import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/core';

import { ISendData } from '../data-layer/ISendData';
import SendFormDataModal from './SendFormDataModal';
import { IBaseformContext, BaseformContext } from './BaseformContext';
import FormStatusEnum from './FormStatusEnum';
import * as FORM from './consts';

interface IProps {
  sendData: ISendData;
  msgSending?: string;
  msgSuccess?: string;
  msgError?: string;
  children: React.ReactNode;
}

const InlineForm: React.FC<IProps> = ({
  sendData,
  msgSending = FORM.MESSAGE_SENDING,
  msgSuccess = FORM.MESSAGE_SUCCESS,
  msgError = FORM.MESSAGE_ERROR,
  children,
}) => {
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

  const waitAndClose = () => setTimeout(() => close(), FORM.MODAL_CLOSE_DELAY);

  sendData.onSend = () => {
    setStatus(FormStatusEnum.Sending);
    setMessage(msgSending);
    onOpen();
  };

  sendData.onSuccess = () => {
    setStatus(FormStatusEnum.Success);
    setMessage(msgSuccess);
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
    const msg = `${msgError}\n${error.message}`;
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
