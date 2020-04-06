import React from 'react';

import { SendContact } from './dataLayer';
import Baseform from './Baseform';
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, EmailControl, NoteControl, Submit } from './formControls';

const msgSuccess = 'Спасибо! Ваше сообщение доставлено! Мы обязательно ответим вам в ближайшее время.';

export default () => (
  <Baseform sendData={new SendContact()} msgSuccess={msgSuccess}>
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
  </Baseform>
);