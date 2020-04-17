import React from 'react';
import { FormErrorMessage, FormLabel, FormControl, Textarea } from '@chakra-ui/core';

import { BaseformContext } from '../base-forms/BaseformContext';

const noteRules = {
  required: true,
};

interface IProps {
  customRegister?: any;
}
const NoteControl: React.FC<IProps> = ({ customRegister, ...props }) => (
  <BaseformContext.Consumer>
    {(context) =>
      context && (
        <FormControl isInvalid={context.errors.note}>
          <FormLabel htmlFor="note">Сообщение</FormLabel>
          <Textarea
            ref={customRegister ? (e) => customRegister(e, noteRules) : context.register(noteRules)}
            name="note"
            placeholder="Ваше сообщение"
            mb="1rem"
            {...props}
          />
          <FormErrorMessage>{context.errors.note && context.errors.note.message}</FormErrorMessage>
        </FormControl>
      )
    }
  </BaseformContext.Consumer>
);

export default NoteControl;
