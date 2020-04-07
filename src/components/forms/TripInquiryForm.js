import React from 'react';

import { SendTripInquiry } from './dataLayer';
import { PopupForm } from './baseForms';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, LastNameControl, EmailControl, DateControl, NoteControl, Submit } from './formControls';


export default ({ isOpen, onClose }) => {
    const sendData = new SendTripInquiry();
    
    return (
        <PopupForm
            title="Записаться в поездку"
            successMsg="Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время."
            sendData={sendData} 
            isOpen={isOpen} onClose={onClose}
        >
            <div>Получив эту заявку, мы сможем связаться с вами и обсудить детали путешествия.</div>
            <InnerWrapper>
            <LeftWrapper>
                <FirstNameControl />
                <LastNameControl />
                <EmailControl />
                <DateControl />
            </LeftWrapper>
            <RightWrapper>
                <NoteControl />
            </RightWrapper>
            </InnerWrapper>
            <Submit>Отправить</Submit>
        </PopupForm>
    );
}