import React from 'react'

import Baseform from './Baseform'
import { EmailControl, Submit } from './formControls'

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts'
const apiUrl = FAKE_GATEWAY_URL

const msgDone = 'Спасибо! Ваша подписка оформлена! Получайте от нас последние новости и предложения!'

export default () => (
  <Baseform apiUrl={apiUrl} msgDone={msgDone}>
    <EmailControl label="" />
    <Submit>Подписаться</Submit>
  </Baseform>
)