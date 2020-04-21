import React from 'react';

import NameControl from './NameControl';

const controlName = 'lastname';
const maxLength = 20;
const label = 'Фамилия';
const placeholder = 'Ваша фамилия';

type Props = {
  required?: boolean;
};
const LastNameControl = ({ required = true }: Props) => (
  <NameControl
    controlName={controlName}
    label={label}
    placeholder={placeholder}
    maxLength={maxLength}
    required={required}
  />
);

export default LastNameControl;
