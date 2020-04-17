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

import { ISendData } from '../data-layer/ISendData';
import { IBaseformContext, BaseformContext } from './BaseformContext';
import FormStatusEnum from './FormStatusEnum';
import { getTitle } from './utils';
import * as FORM from './consts';
import { Container } from '../../Container';

interface IProps {
  sendData: ISendData;
  msgSending?: string;
  msgSuccess?: string;
  msgError?: string;
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  formSize?: string;
}

const PopupForm: React.FC<IProps> = ({
  sendData,
  msgSending = FORM.MESSAGE_SENDING,
  msgSuccess = FORM.MESSAGE_SUCCESS,
  msgError = FORM.MESSAGE_ERROR,
  children,
  title,
  isOpen,
  onClose,
  formSize = 'xl',
}) => {
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
    }, FORM.MODAL_CLOSE_DELAY);
  };

  sendData.onSend = () => {
    setStatus(FormStatusEnum.Sending);
    setMessage(msgSending);
  };

  sendData.onSuccess = () => {
    setStatus(FormStatusEnum.Success);
    setMessage(msgSuccess);
    waitAndClose();
  };

  sendData.onCancel = () => {
    setStatus(FormStatusEnum.Cancelled);
    setMessage('Отменено пользователем');
    waitAndClose();
  };

  sendData.onError = (error) => {
    setStatus(FormStatusEnum.Error);
    setMessage(`${msgError} ${error.message}`);
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
      isCentered
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
