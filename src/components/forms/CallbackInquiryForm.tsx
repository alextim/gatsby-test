import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import { SendCallbackInquiry } from './data-layer';
import { PopupForm } from './base-forms';
import { PhoneControl, Submit } from './controls';

const FORM_TITLE = 'Обратный звонок';
const FORM_SUBTITLE = 'Оставьте свои данные, и мы сразу свяжемся с вами.';
const MSG_SUCCESS = 'Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время.';
const SUBMIT_TITLE = 'ОТПРАВИТЬ ЗАЯВКУ';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CallbackInquiryForm = ({ isOpen, onClose }: Props) => {
  const sendData = new SendCallbackInquiry();

  return (
    <PopupForm
      title={FORM_TITLE}
      msgSuccess={MSG_SUCCESS}
      sendData={sendData}
      isOpen={isOpen}
      onClose={onClose}
      formSize="md"
    >
      <InnerWrapper>
        <Box mb="1rem">{FORM_SUBTITLE}</Box>
        <PhoneControl label="" icon={true} />
        <Submit width="85%" m="1rem auto 1.5rem">
          {SUBMIT_TITLE}
        </Submit>
      </InnerWrapper>
    </PopupForm>
  );
};

export default CallbackInquiryForm;
