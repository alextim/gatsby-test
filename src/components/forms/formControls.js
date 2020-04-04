import React from 'react'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
    Button,
} from '@chakra-ui/core'

const EMAIL_MAX_LENGTH = 20
const NAME_MAX_LENGTH = 20
/*
const required = 'This field is required';

function validateName(value) {
  let error;
  if (!value) {
    error = "Имя является обязательным."
  } 
  return error || true;
}

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Адрес почты является обязательным."
  }

  return error || true;
}

*/
const Submit = props =>   <Button type="submit">{props.children}</Button>

const EmailControl = ({register, errors, ...props}) =>

    <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
                name="email"
                type="email"
                placeholder="Ваш E-mail"
                ref={ e => register(e, { 
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
                })}
                {...props}
            />
        <FormErrorMessage>
            {errors.email && errors.email.message}
        </FormErrorMessage>
    </FormControl>


const NameControl = ({register, errors}) =>
    <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Имя</FormLabel>
        <Input
            name="name"
            placeholder="Ваше имя"
            ref={register({ 
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
            })}
        />

        <FormErrorMessage>
            {errors.name && errors.name.message}
        </FormErrorMessage>
    </FormControl>

const NoteControl = ({register, errors}) =>
    <FormControl isInvalid={errors.note}>
        <FormLabel htmlFor="note">Сообщение</FormLabel>
        <Input as="textarea"
            ref={register({ required: true })}
            name="note"
            rows="3"
            placeholder="Your message"
        />
        <FormErrorMessage>
            {errors.note && errors.note.message}
        </FormErrorMessage>
    </FormControl>


export {EmailControl, NameControl, NoteControl, Submit}