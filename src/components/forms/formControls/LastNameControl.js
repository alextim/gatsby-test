import React from 'react';

import NameControl from './NameControl';


const controlName = 'lastname';
const maxLength = 20;
const label = 'Фамилия';
const placeholder = 'Ваша фамилия'; 


export default() => (
    <NameControl 
          controlName={controlName}
          label={label}
          placeholder={placeholder}
          maxLength={maxLength}
  />
);