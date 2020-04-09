import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,  
  Select,
  InputGroup, InputLeftElement,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BaseformContext } from '../baseForms/BaseformContext';

const selectRules = {
};

export default ({ items, customRegister, name, label="", icon=false }) => (
  <BaseformContext.Consumer>
    {context => {
      const { register, errors } = context;
      const selectRregister = customRegister ? e => customRegister(e, selectRules) : register(selectRules);

      return (
        <FormControl isInvalid={errors[name]} mb="1rem">
          { label && <FormLabel htmlFor={name}>{label}</FormLabel> }
          { icon ?
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon icon={icon} />} />
              <Select name={name} ref={selectRregister}>
                {
                  items.map((item, i) =>
                    <option key={i} value={item.value}>{item.name}</option>
                  )
                }
              </Select>
            </InputGroup> :
            <Select name={name} ref={selectRregister}>
              {
                items.map((item, i) => (
                  <option key={i} value={item.value}>{item.name}</option>
                ))
              }
            </Select>
          }

          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      );
    }}
  </BaseformContext.Consumer>
);
