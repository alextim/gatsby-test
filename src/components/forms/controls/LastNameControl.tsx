import React from 'react';

import NameControl from './NameControl';

const controlName = 'lastname';
const maxLength = 20;
const label = 'Фамилия';
const placeholder = 'Ваша фамилия';

interface IProps {
  required?: boolean;
}
const LastNameControl: React.FC<IProps> = ({ required = true }) => (
  <NameControl
    controlName={controlName}
    label={label}
    placeholder={placeholder}
    maxLength={maxLength}
    required={required}
  />
);

export default LastNameControl;
