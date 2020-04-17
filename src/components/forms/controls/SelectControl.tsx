import React from 'react';
import { FormErrorMessage, FormLabel, FormControl, Select, InputGroup, InputLeftElement } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

import { BaseformContext } from '../base-forms/BaseformContext';
import { ISelectControlItem } from '../../../types/types';

const selectRules = {};

interface IProps {
  items: Array<ISelectControlItem>;
  customRegister?: any;
  name: string;
  label?: React.ReactNode;
  icon?: IconName | [IconPrefix, IconName];
  selected: number;
}

const SelectControl: React.FC<IProps> = ({ items, customRegister, name, label, icon, selected }) => (
  <BaseformContext.Consumer>
    {(context) =>
      context && (
        <FormControl isInvalid={context.errors[name]} mb="1rem">
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          {icon ? (
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={icon} />
              </InputLeftElement>
              <Select
                ref={customRegister ? (e) => customRegister(e, selectRules) : context.register(selectRules)}
                name={name}
                value={items[selected].value}
              >
                {items.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </InputGroup>
          ) : (
            <Select
              ref={customRegister ? (e) => customRegister(e, selectRules) : context.register(selectRules)}
              name={name}
              value={items[selected].value}
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
