import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Textarea,
} from '@chakra-ui/core';

import { BaseformContext } from '../baseForms/BaseformContext';

const noteRules = {
  required: true,
};

export default ({ customRegister, ...props }) => (
  <BaseformContext.Consumer>
    {context => {
      const { register, errors } = context;
      return (
        <FormControl isInvalid={errors.note}>
          <FormLabel htmlFor="note">Сообщение</FormLabel>
          <Textarea
            ref={customRegister ? e => customRegister(e, noteRules) : register(noteRules)}
            name="note"
            placeholder="Ваше сообщение"
            mb="1rem"
            {...props}
          />
          <FormErrorMessage>
            {errors.note && errors.note.message}
          </FormErrorMessage>
        </FormControl>
        );
    }}
  </BaseformContext.Consumer>
);
