import React from 'react';

import { SendContact } from './dataLayer';
import { InlineForm } from './baseForms';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, EmailControl, NoteControl, Submit } from './formControls';

const msgSuccess = 'Спасибо! Ваше сообщение доставлено! Мы обязательно ответим вам в ближайшее время.';

const ContactForm = () => (
  <InlineForm sendData={new SendContact()} msgSuccess={msgSuccess}>
    <InnerWrapper>
      <LeftWrapper>
        <FirstNameControl />
        <EmailControl />
      </LeftWrapper>
      <RightWrapper>
        <NoteControl rows="5"/>
      </RightWrapper>
    </InnerWrapper>
    <Submit>Отправить</Submit>
  </InlineForm>
);

export default ContactForm;
