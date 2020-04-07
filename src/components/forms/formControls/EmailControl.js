import React from 'react';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
    InputGroup, InputLeftElement,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BaseformContext } from '../baseForms/BaseformContext';


const EMAIL_MAX_LENGTH = 20;
const emailRules = { 
    //validate: validateEmail,
    required: 'Адрес почты является обязательным',
    maxLength : {
        value: EMAIL_MAX_LENGTH,
        message: `Максимальная длина e-mail ${EMAIL_MAX_LENGTH} символов`,
    },
    pattern: {
        ///^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Недопустимый e-mail.",
    }
};


export default ({ customRegister, label="E-mail", icon=false }) => (
    <BaseformContext.Consumer>
        {context => {
            const { register, errors } = context;
            const emailRregister = customRegister ? e => customRegister(e, emailRules) : register(emailRules);

            return (
                <FormControl isInvalid={errors.email} mb="1rem">
                    { label && <FormLabel htmlFor="email">{label}</FormLabel> }
                    { icon ?
                            <InputGroup>
                                <InputLeftElement children={<FontAwesomeIcon icon="envelope" />} />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Ваш E-mail"
                                    ref={emailRregister}
                                />
                            </InputGroup>
                        :
                            <Input
                                name="email"
                                type="email"
                                placeholder="Ваш E-mail"
                                ref={emailRregister}
                            />
                    }

                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
            )}
        }
    </BaseformContext.Consumer>
);