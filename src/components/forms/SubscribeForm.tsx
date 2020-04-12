import React from 'react';

import { SendSubscribe } from './data-layer';
import { InlineForm } from './base-forms';
import { EmailControl, Submit } from './controls';

const msgSuccess = 'Спасибо! Ваша подписка оформлена! Получайте от нас последние новости и предложения!';

const SubscribeForm = () => (
  <InlineForm sendData={new SendSubscribe()} msgSuccess={msgSuccess}>
    <EmailControl label="" icon={true} />
    <Submit>Подписаться</Submit>
  </InlineForm>
);

export default SubscribeForm;
