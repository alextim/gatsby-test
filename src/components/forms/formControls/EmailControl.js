import React from 'react';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
} from '@chakra-ui/core';

import { BaseformContext } from '../BaseformContext';

const EMAIL_MAX_LENGTH = 20;


const emailRules = { 
    //validate: validateEmail,
    required: 'Адрес почты является обязательным',
    maxLength : {
        value: EMAIL_MAX_LENGTH,
        message: `Максимальная длина e-mail ${EMAIL_MAX_LENGTH} символов` 
    },
    pattern: {
        ///^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Недопустимый e-mail."
    }
};

export default ({ customRegister, label="E-mail" }) => (
    <BaseformContext.Consumer>
        {context => {
            const { register, errors } = context
            return (
                <FormControl isInvalid={errors.email} mb="1rem">
                    { label && <FormLabel htmlFor="email">{label}</FormLabel> }
                    <Input
                        name="email"
                        type="email"
                        placeholder="Ваш E-mail"
                        ref={ customRegister ? e => customRegister(e, emailRules) : register(emailRules) }
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
            )}
        }
    </BaseformContext.Consumer>
);