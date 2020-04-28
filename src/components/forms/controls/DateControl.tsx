import React from 'react';
import { Controller } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, InputGroup, InputLeftElement } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDatePicker from 'react-date-picker';

import { BaseformContext } from '../base-forms/BaseformContext';

const dateRules = {
  required: 'Дата обязательна',
};
const DatePickerController = ({ control }) => (
  <Controller
    as={<ReactDatePicker clearIcon={null} />}
    control={control}
    rules={dateRules}
    valueName="value" // DateSelect value's name is selected
    name="date"
    className="input"
    placeholderText="Дата"
    onChange={([value]) => value}
  />
);

type Props = {
  label?: string;
  icon?: boolean;
};
const DateControl = ({ label = 'Дата', icon = false }: Props) => (
  <BaseformContext.Consumer>
    {(context) =>
      context && (
        <FormControl isInvalid={context.errors.date} mb="1rem">
          {label && <FormLabel htmlFor="date">{label}</FormLabel>}
          {icon ? (
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon="calendar" />
              </InputLeftElement>
              <DatePickerController control={context.control} />
            </InputGroup>
          ) : (
            <DatePickerController control={context.control} />
          )}
          <FormErrorMessage>{context.errors.date && context.errors.date.message}</FormErrorMessage>
        </FormControl>
      )
    }
  </BaseformContext.Consumer>
);

export default DateControl;
