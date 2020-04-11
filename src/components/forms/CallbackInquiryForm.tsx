import React from 'react';

import { SendCallbackInquiry } from './dataLayer';
import { PopupForm } from './baseForms';
import { PhoneControl, Submit } from './formControls';

const CallbackInquiryForm = ({ isOpen, onClose }) => {
  const sendData = new SendCallbackInquiry();

  return (
    <PopupForm
      title="Обратный звонок"
      successMsg="Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время."
      sendData={sendData} 
      isOpen={isOpen} onClose={onClose}
      formSize="md"
    >
      <div>Оставьте свои данные, и мы сразу свяжемся с вами.</div>
      <PhoneControl label="" icon="true" />
      <Submit>ОТПРАВИТЬ ЗАЯВКУ</Submit>
    </PopupForm>
  );
};

export default CallbackInquiryForm;
