import React from 'react';

import { SendTripInquiry } from './data-layer';
import { PopupForm } from './base-forms';
import { InnerWrapper } from './wrappers';
import {
  FirstNameControl,
  LastNameControl,
  EmailControl,
  DateControl,
  NoteControl,
  TripDatesControl,
  Submit,
} from './controls';
import { ISelectControlItem } from '../../types/types';

const FORM_TITLE = 'Записаться в поездку';
const FORM_SUBTITLE = 'Получив эту заявку, мы сможем связаться с вами и обсудить детали путешествия.';
const MSG_SUCCESS = 'Спасибо! Ваша заявка принята. Мы обязательно свяжемся с вами в ближайшее время.';
const SUBMIT_TITLE = 'Отправить';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
  dates?: Array<ISelectControlItem>;
  selected: number;
}

const TripInquiryForm: React.FC<IProps> = ({ isOpen, onClose, mode, dates, selected }) => {
  const sendData = new SendTripInquiry();

  return (
    <PopupForm title={FORM_TITLE} msgSuccess={MSG_SUCCESS} sendData={sendData} isOpen={isOpen} onClose={onClose}>
      <div>{FORM_SUBTITLE}</div>
      <div>
        <FirstNameControl />
        <LastNameControl />
        <EmailControl />
        {mode === 'on-request' ? <DateControl /> : dates && <TripDatesControl items={dates} selected={selected} />}
        <NoteControl />
        {mode === 'list' && dates && (
          <div>* Если не нашли подходящих дат в списке, то можете написать свой вариант дат в Сообщении</div>
        )}
      </div>
      <Submit mt="1rem" mb="1.5rem">
        {SUBMIT_TITLE}
      </Submit>
    </PopupForm>
  );
};

export default TripInquiryForm;
