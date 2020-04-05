import React from 'react'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
    Button,
    Textarea,
} from '@chakra-ui/core'

import { BaseformContext } from './BaseformContext'

const EMAIL_MAX_LENGTH = 20
const NAME_MAX_LENGTH = 20

const Submit = props => <Button type="submit">{props.children}</Button>

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
}

const EmailControl = ({ customRegister, label="E-mail" }) =>
    <BaseformContext.Consumer>
        {context => {
            const { register, errors } = context
            return (
                <FormControl isInvalid={errors.email}>
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

const nameRules = { 
    //validate: validateName,
    required: 'Имя является обязательным',
    maxLength : {
        value: NAME_MAX_LENGTH,
        message: `Максимальная длина имени ${NAME_MAX_LENGTH} символов` 
    },
    pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ\s]*$/,
        message: "Допускаются только буквы и пробел."
    }
}
const NameControl = ({ customRegister }) => 
    <BaseformContext.Consumer>
        {context => {
            const { register, errors } = context
            
            return (
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Имя</FormLabel>
                    <Input
                        name="name"
                        placeholder="Ваше имя"
                        ref={ customRegister ? e => customRegister(e, nameRules) : register(nameRules) }
                    />

                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
            )}
        }
    </BaseformContext.Consumer>

const noteRules = {
    required: true
}

const NoteControl = ({ customRegister }) =>
    <BaseformContext.Consumer>
        {context => {
            const { register, errors } = context
            return (
                <FormControl isInvalid={errors.note}>
                    <FormLabel htmlFor="note">Сообщение</FormLabel>
                    <Textarea
                        ref={ customRegister ? e => customRegister(e, noteRules) : register(noteRules) }
                        name="note"
                        rows="3"
                        placeholder="Ваше сообщение"
                    />
                    <FormErrorMessage>
                        {errors.note && errors.note.message}
                    </FormErrorMessage>
                </FormControl>
                )}
            }
    </BaseformContext.Consumer>

export {EmailControl, NameControl, NoteControl, Submit}
