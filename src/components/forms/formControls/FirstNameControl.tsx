import React from 'react';

import { BaseformContext } from '../baseForms/BaseformContext';
import NameControl from './NameControl';

const controlName = 'firstname';
const maxLength = 40;
const label = 'Имя';
const placeholder = 'Ваше имя';

export default () => (
  <BaseformContext.Consumer>
    {
      context => {
        const customRegister = (e, o) => {
          context.register(e, o);
          context.focusRef.current = e;
        };
        return (
          <NameControl 
            customRegister={customRegister} 
            controlName={controlName}
            label={label}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        );
      }
    }
    </BaseformContext.Consumer>
);
