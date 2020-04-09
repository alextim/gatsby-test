import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup, InputLeftElement,
} from '@chakra-ui/core';
//https://final-form.org/docs/react-final-form/getting-started
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BaseformContext } from '../baseForms/BaseformContext';

const PHONE_MIN_LENGTH = 6;
const PHONE_MAX_LENGTH = 15;

const phoneRules = { 
  required: 'Номер телефона является обязательным',
  maxLength: {
    value: PHONE_MAX_LENGTH,
    message: `Номер не должен быть длиннее ${PHONE_MAX_LENGTH} знаков`,
  },
  minLength: {
    value: PHONE_MIN_LENGTH,
    message: `Номер не должен быть короче ${PHONE_MIN_LENGTH} знаков`,
  },
  pattern: {
    value: /[0-9]+$/i,
    message: 'Допускаются только цифры',
  }
};

export default ({ customRegister, label="Телефон", icon=false }) => (
  <BaseformContext.Consumer>
    {context => {
      const { register, errors } = context;
      const phoneRegister = customRegister ? e => customRegister(e, phoneRules) : register(phoneRules); 

      return (
        <FormControl isInvalid={errors.phone} mb="1rem">
          { label && <FormLabel htmlFor="phone">{label}</FormLabel> }
          { icon ?
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon icon="phone" />} />
              <Input
                name="phone"
                type="phone"
                placeholder="Ваш телефон"
                ref={phoneRegister}
              />
            </InputGroup> :
            <Input
              name="phone"
              type="phone"
              placeholder="Ваш телефон"
              ref={phoneRegister}
            />
          }
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
      );
    }}
  </BaseformContext.Consumer>
);
