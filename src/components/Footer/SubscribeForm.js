import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@chakra-ui/core'
import {
  Input,
} from '@chakra-ui/core'

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts';
//const required = 'This field is required';

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm()

  const onSubmit = async data => {
    try {
      console.log(data);
      await fetch(FAKE_GATEWAY_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  )
  
  const ShowError = msg => <div className="msg-error">{msg}</div>


  const showForm = (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} method="post">
      <Box className="field">
        <Box className="control">
          <Input className={'input' + (errors.email ? ' is-danger' : '')}
            type="email"
            name="email"
            id="email"
            placeholder="your@email.address"
            ref={register({ 
                required: true,
                maxLength: 10,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                }
              })}
            disabled={isSubmitting}
            />
        </Box>
        {errors.email && errors.email.type === 'required'  && ShowError('Email required') }
        {errors.email && errors.email.type === 'maxLength' && ShowError('Max length exceeded') }
        {errors.email && errors.email.type === 'pattern'   && ShowError('invalid email address') }
     </Box>

      <Box className="field">
        <Box className="control">
          <Button className="button is-link" type="submit" disabled={isSubmitting}>
            Подписаться
          </Button>
        </Box>
      </Box>
    </Box>
  )


  return (
    <Box>
      <Box>Будьте в курсе наших последних новостей и актуальных предложений!</Box>
      <Box>
        {errors && errors.submit && ShowError(errors.submit.message)}
      </Box>
      <Box>
        {submitted ? showThankYou : showForm}
      </Box>
    </Box>
  )
}