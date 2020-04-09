import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/core';

import { BaseformContext } from '../baseForms/BaseformContext';

export default ({ customRegister, controlName, label, placeholder, maxLength }) => {
  const nameRules = {
    //validate: validateName,
    required: `Поле "${label}" является обязательным`,
    maxLength: {
      value: maxLength,
      message: `Максимальная длина ${maxLength} символов`,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯёЁ\s]*$/,
      message: 'Допускаются только буквы и пробел.',
    }
  };

  return (
    <BaseformContext.Consumer>
      {context => {
        const { register, errors } = context;

        return (
          <FormControl isInvalid={errors[controlName]} mb="1rem">
            <FormLabel htmlFor={controlName}>{label}</FormLabel>
            <Input
              name={controlName}
              placeholder={placeholder}
              ref={customRegister ? e => customRegister(e, nameRules) : register(nameRules)}
            />

            <FormErrorMessage>
              {errors[controlName] && errors[controlName].message}
            </FormErrorMessage>
          </FormControl>
        );
      }}
    </BaseformContext.Consumer>
  );
};
