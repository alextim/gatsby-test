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

import { IBaseformContext, BaseformContext } from './BaseformContext';
import FormStatusEnum from './FormStatusEnum';
import { getTitle, MODAL_CLOSE_DELAY } from './formUtils';

const PopupForm = ({ children, title, successMsg, sendData, isOpen, onClose, formSize = '96%' }) => {
  const {
    handleSubmit,
    // setError,
    // reset,
    register,
    errors,
    control,
  } = useForm();

  const focusRef = useRef();
  const [status, setStatus] = useState(FormStatusEnum.Form);
  const [message, setMessage] = useState('');

  const waitAndClose = () => {
    setTimeout(() => {
      onClose();
      setStatus(FormStatusEnum.Form);
    }, MODAL_CLOSE_DELAY);
  };

  sendData.onSend = () => {
    setStatus(FormStatusEnum.Sending);
    setMessage('Пожалуйста, подождите.');
  };

  sendData.onSuccess = () => {
    setStatus(FormStatusEnum.Success);
    setMessage(successMsg);
    waitAndClose();
  };

  sendData.onCancel = () => {
    setStatus(FormStatusEnum.Cancelled);
    setMessage('Отменено пользователем');
    waitAndClose();
  };

  sendData.onError = (error) => {
    setStatus(FormStatusEnum.Error);
    setMessage(`Данные не сохранены. Повторите вашу попытку позже. ${error.message}`);
    waitAndClose();
  };

  const cancel = () => sendData.cancel();

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendData.send(data);
  };

  title = getTitle(status, title);

  const context: IBaseformContext = {
    errors,
    register,
    control,
    focusRef,
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={status === FormStatusEnum.Form ? formSize : 'sm'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {status !== FormStatusEnum.Sending && <ModalCloseButton />}
        <ModalBody>
          {status === FormStatusEnum.Form && (
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <BaseformContext.Provider value={context}>{children}</BaseformContext.Provider>
            </form>
          )}

          {status === FormStatusEnum.Sending && <Spinner />}

          {status !== FormStatusEnum.Form && <div>{message}</div>}
        </ModalBody>
        {status !== FormStatusEnum.Form && (
          <ModalFooter>
            <Button onClick={status === FormStatusEnum.Sending ? cancel : onClose}>
              {status === FormStatusEnum.Sending ? 'Отменить' : 'Закрыть'}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PopupForm;
