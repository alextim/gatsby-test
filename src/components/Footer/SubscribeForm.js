import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "rebass"
import {
  Input,
} from '@rebass/forms'

const FAKE_GATEWAY_URL = "https://jsonplaceholder.typicode.com/posts";
//const required = "This field is required";

export default () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async data => {
    try {
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

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  );
  
  const showForm = (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} method="post">
      <Box className="field">
        <Box className="control">
          <Input className={("input").concat(errors.email ? " is-danger": "")}
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
        {errors.email && errors.email.type === 'required' && <div className="msg-error">E-mail is required</div>},
        {errors.email && errors.email.type === 'maxLength' && <div className="msg-error">Max length exceeded</div> },
        {errors.email && errors.email.type === 'pattern' && <div className="msg-error">invalid email address</div> },
     </Box>

      <Box className="field">
        <Box className="control">
          <Button className="button is-link" type="submit" disabled={isSubmitting}>
            Подписаться
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box>Будьте в курсе наших последних новостей и актуальных предложений!</Box>
      <Box>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </Box>
      <Box>
        {submitted ? showThankYou : showForm}
      </Box>
    </Box>
  )
}