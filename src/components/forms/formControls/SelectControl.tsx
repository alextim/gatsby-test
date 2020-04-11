import React from 'react';
import { FormErrorMessage, FormLabel, FormControl, Select, InputGroup, InputLeftElement } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BaseformContext } from '../baseForms/BaseformContext';

const selectRules = {};

const SelectControl = ({ items, customRegister, name, label = '', icon = false }) => (
  <BaseformContext.Consumer>
    {(context) =>
      context && (
        <FormControl isInvalid={context.errors[name]} mb="1rem">
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          {icon ? (
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon icon={icon} />} />
              <Select
                ref={customRegister ? (e) => customRegister(e, selectRules) : context.register(selectRules)}
                name={name}
              >
                {items.map((item, i) => (
                  <option key={i} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </InputGroup>
          ) : (
            <Select
              ref={customRegister ? (e) => customRegister(e, selectRules) : context.register(selectRules)}
              name={name}
            >
              {items.map((item, i) => (
                <option key={i} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          )}

          <FormErrorMessage>{context.errors.email && context.errors.email.message}</FormErrorMessage>
        </FormControl>
      )
    }
  </BaseformContext.Consumer>
);

export default SelectControl;
