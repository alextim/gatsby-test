import React from 'react';

import { SendTripInquiry } from './dataLayer';
import { PopupForm } from './baseForms';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, LastNameControl, EmailControl, DateControl, NoteControl, TripDatesControl, Submit } from './formControls';

export default ({ isOpen, onClose }) => {
  const sendData = new SendTripInquiry();
  const items = [
    { value: 1, name: '01.01.2020 - 01.12.2020' },
    { value: 2, name: '01.02.2020 - 02.12.2020' },
    { value: 3, name: '01.03.2020 - 03.12.2020' },
    { value: 4, name: '01.04.2020 - 04.12.2020' },
    { value: 5, name: '01.05.2020 - 05.12.2020' },
    { value: 6, name: '01.06.2020 - 06.12.2020' },
    { value: 7, name: '01.07.2020 - 07.12.2020' },
  ];

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
          <TripDatesControl items={items} />
        </LeftWrapper>
        <RightWrapper>
          <NoteControl />
        </RightWrapper>
      </InnerWrapper>
      <Submit>Отправить</Submit>
    </PopupForm>
  );
};
