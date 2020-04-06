import React from 'react';

import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers';
import { FirstNameControl, LastNameControl, EmailControl, NoteControl, Submit } from './formControls';

export default () => (
  <>
    <div>Получив эту заявку, мы сможем связаться с вами и обсудить детали путешествия.</div>
    <InnerWrapper>
      <LeftWrapper>
        <FirstNameControl />
        <LastNameControl />
        <EmailControl />
      </LeftWrapper>
      <RightWrapper>
        <NoteControl />
      </RightWrapper>
    </InnerWrapper>
    <Submit>Отправить</Submit>
  </>
);