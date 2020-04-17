import React from 'react';

import { SendTripInquiry } from './data-layer';
import { PopupForm } from './base-forms';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import {
  FirstNameControl,
  LastNameControl,
  EmailControl,
  DateControl,
  NoteControl,
  TripDatesControl,
  Submit,
} from './controls';

const FORM_TITLE = 'Записаться в поездку';
const FORM_SUBTITLE = 'Получив эту заявку, мы сможем связаться с вами и обсудить детали путешествия.';
const MSG_SUCCESS = 'Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время.';
const SUBMIT_TITLE = 'Отправить';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
}

const TripInquiryForm: React.FC<IProps> = ({ isOpen, onClose, mode, dates, selected }) => {
  const sendData = new SendTripInquiry();

  return (
    <PopupForm title={FORM_TITLE} msgSuccess={MSG_SUCCESS} sendData={sendData} isOpen={isOpen} onClose={onClose}>
      <div>{FORM_SUBTITLE}</div>
      <InnerWrapper>
        <LeftWrapper>
          <FirstNameControl />
          <LastNameControl />
          <EmailControl />
          {mode === 'on-request' ? <DateControl /> : <TripDatesControl dates={dates} selected={selected} />}
        </LeftWrapper>
        <RightWrapper>
          <NoteControl />
        </RightWrapper>
      </InnerWrapper>
      <Submit>{SUBMIT_TITLE}</Submit>
    </PopupForm>
  );
};

export default TripInquiryForm;
