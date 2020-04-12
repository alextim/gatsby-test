import React from 'react';

import { SendCallbackInquiry } from './data-layer';
import { PopupForm } from './base-forms';
import { PhoneControl, Submit } from './controls';

const FORM_TITLE = 'Обратный звонок';
const FORM_SUBTITLE = 'Оставьте свои данные, и мы сразу свяжемся с вами.';
const MSG_SUCCESS = 'Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время.';
const SUBMIT_TITLE = 'ОТПРАВИТЬ ЗАЯВКУ';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackInquiryForm: React.FC<IProps> = ({ isOpen, onClose }) => {
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
      <div>{FORM_SUBTITLE}</div>
      <PhoneControl label="" icon={true} />
      <Submit>{SUBMIT_TITLE}</Submit>
    </PopupForm>
  );
};

export default CallbackInquiryForm;
