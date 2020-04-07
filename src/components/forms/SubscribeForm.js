import React from 'react';

import { SendSubscribe } from './dataLayer';
import { InlineForm } from './baseForms';
import { EmailControl, Submit } from './formControls';


const msgSuccess = 'Спасибо! Ваша подписка оформлена! Получайте от нас последние новости и предложения!';

export default () => (
  <InlineForm sendData={new SendSubscribe()} msgSuccess={msgSuccess}>
    <EmailControl label="" icon="true" />
    <Submit>Подписаться</Submit>
  </InlineForm>
);