import React from 'react';
import { Controller } from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
    InputGroup, InputLeftElement
} from '@chakra-ui/core';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ReactDatePicker from 'react-date-picker';

import { BaseformContext } from '../baseForms/BaseformContext';

const dateRules = {
    required: 'Дата обязательна',
};

const DatePickerController = ({control}) => (
    <Controller
        as={<ReactDatePicker clearIcon={null} />}
        control={control}
        rules={dateRules}
        valueName="value" // DateSelect value's name is selected
        onChange={([value]) => value}
        name="date"
        className="input"
        placeholderText="Дата"
    />
);


export default ({ label="Дата", icon=false }) => (
    <BaseformContext.Consumer>
        {context => {
            const { errors, control } = context;
             
            return ( 
                <FormControl isInvalid={errors.date} mb="1rem">
                    { label && <FormLabel htmlFor="date">{label}</FormLabel> }
                    { icon ?
                            <InputGroup>
                                <InputLeftElement children={<FontAwesomeIcon icon="calendar" />} />
                                <DatePickerController control={control} />
                            </InputGroup>
                        :
                            <DatePickerController control={control} /> 
                    }
                    <FormErrorMessage>
                        {errors.date && errors.date.message}
                    </FormErrorMessage>
                </FormControl>
            )}
        }
    </BaseformContext.Consumer>
);