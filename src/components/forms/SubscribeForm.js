import React from 'react';

import { SendSubscribe } from './dataLayer';
import Baseform from './Baseform';
import { EmailControl, Submit } from './formControls';


const msgDone = 'Спасибо! Ваша подписка оформлена! Получайте от нас последние новости и предложения!';

export default () => (
  <Baseform sendData={new SendSubscribe()} msgDone={msgDone}>
    <EmailControl label="" />
    <Submit>Подписаться</Submit>
  </Baseform>
);