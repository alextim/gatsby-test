import React from 'react';
import { FormErrorMessage, FormLabel, FormControl, Input } from '@chakra-ui/core';

import { BaseformContext } from '../base-forms/BaseformContext';

export interface INameControlProps {
  readonly customRegister?: any;
  readonly controlName: string;
  readonly label: string;
  readonly placeholder: string;
  readonly maxLength: number;
}

const NameControl: React.FC<INameControlProps> = ({ customRegister, controlName, label, placeholder, maxLength }) => {
  const nameRules = {
    // validate: validateName,
    required: `Поле "${label}" является обязательным`,
    maxLength: {
      value: maxLength,
      message: `Максимальная длина ${maxLength} символов`,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯёЁ\s]*$/,
      message: 'Допускаются только буквы и пробел.',
    },
  };

  return (
    <BaseformContext.Consumer>
      {(context) =>
        context && (
          <FormControl isInvalid={context.errors[controlName]} mb="1rem">
            <FormLabel htmlFor={controlName}>{label}</FormLabel>
            <Input
              ref={customRegister ? (e) => customRegister(e, nameRules) : context.register(nameRules)}
              name={controlName}
              placeholder={placeholder}
            />

            <FormErrorMessage>{context.errors[controlName] && context.errors[controlName].message}</FormErrorMessage>
          </FormControl>
        )
      }
    </BaseformContext.Consumer>
  );
};

export default NameControl;
