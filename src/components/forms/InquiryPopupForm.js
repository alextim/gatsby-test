import React from 'react';

import { SendInquiry } from './dataLayer';
import Popupform from './Popupform';
import InquiryFormControls from './InquiryFormControls';

export default ({ isOpen, onClose }) => (
    <Popupform
        title="Записаться в поездку"
        successMsg="Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время."
        sendData={new SendInquiry()} isOpen={isOpen} onClose={onClose}>
        <InquiryFormControls />
    </Popupform>
);