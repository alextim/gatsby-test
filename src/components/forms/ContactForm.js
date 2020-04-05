import React from 'react'

import Baseform from './Baseform'
import { InnerWrapper, LeftWrapper, RightWrapper } from './wrappers'
import { FirstNameControl, EmailControl, NoteControl, Submit } from './formControls'

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts'
const apiUrl = FAKE_GATEWAY_URL

const msgDone = 'Спасибо! Ваше сообщение доставлено! Мы обязательно ответим вам в ближайшее время.'


export default () => (
  <Baseform apiUrl={apiUrl} msgDone={msgDone}>
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
)