import React from 'react';

import { SendContact } from './data-layer';
import { InlineForm } from './base-forms';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, EmailControl, NoteControl, Submit } from './controls';

const msgSuccess = 'Спасибо! Ваше сообщение доставлено! Мы обязательно ответим вам в ближайшее время.';

const ContactForm = () => (
  <InlineForm sendData={new SendContact()} msgSuccess={msgSuccess}>
    <InnerWrapper>
      <LeftWrapper>
        <FirstNameControl />
        <EmailControl />
      </LeftWrapper>
      <RightWrapper>
        <NoteControl rows="5" />
      </RightWrapper>
    </InnerWrapper>
    <Submit>Отправить</Submit>
  </InlineForm>
);

export default ContactForm;
