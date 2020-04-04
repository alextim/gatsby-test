import React from 'react'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,    
    Input,
    Button,
} from '@chakra-ui/core'


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

const EmailControl = ({register,errors}) =>

    <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
                name="email"
                type="email"
                placeholder="Ваш E-mail"
                ref={register({ 
                    //validate: validateEmail,
                    required: true,
                    maxLength: 20,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Недопустимый e-mail."
                    }
                })}
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
                required: true,
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