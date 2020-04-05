import React from 'react'

import Baseform from './Baseform'
import { BaseformContext } from './BaseformContext'
import { EmailControl, NameControl, NoteControl, Submit } from './formControls'

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts'
const apiUrl = FAKE_GATEWAY_URL

const msgDone = 'Спасибо! Ваше сообщение доставлено! Мы обязательно ответим вам в ближайшее время.'

const EmailConrolWithFocus = () => (
  <BaseformContext.Consumer>
  {
    context => {
      const customRegister = (e, o) => {
        context.register(e, o)
        context.focusRef.current = e
      }
      return (<EmailControl customRegister={customRegister} />)      
    }
  }
  </BaseformContext.Consumer>
)

export default () => (
  <Baseform apiUrl={apiUrl} msgDone={msgDone}>
    <EmailConrolWithFocus />
    <NameControl />
    <NoteControl />
    <Submit>Отправить</Submit>
  </Baseform>
)
