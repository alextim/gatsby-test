import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";
const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts';
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

export default () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm()

  const onSubmit = async (data, e) => {
    try {
      console.log('Submit event', e)
      console.log(data);
      
      await fetch(FAKE_GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      alert(JSON.stringify(data))
      setSubmitted(true);
      reset();
      
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          name="email"
          placeholder="Ваш E-mail"
          ref={register({ 
            validate: validateEmail,
            required: true,
            maxLength: 10,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Недопустимый e-mail."
            }
          })}
          disabled={isSubmitting}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>


      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Имя</FormLabel>
        <Input
          name="name"
          placeholder="name"
          ref={register({ 
            validate: validateName,
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ\s]*$/,
              message: "Допускаются только буквы и пробел."
            }
          })}
          disabled={isSubmitting}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>


      <FormControl isInvalid={errors.note}>
        <FormLabel htmlFor="note">Сообщение</FormLabel>
        <Input as="textarea"
          ref={register({ required })}
          name="note"
          rows="3"
          placeholder="Your message"
          disabled={isSubmitting}
        />
        <FormErrorMessage>
          {errors.note && errors.note.message}
        </FormErrorMessage>
      </FormControl>

      <Button isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>

  )
}
