import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "rebass"
/*
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
} from '@rebass/forms'
*/
const FAKE_GATEWAY_URL = "https://jsonplaceholder.typicode.com/posts";
const required = "This field is required";

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
      <div className="field">
        <label className="label" htmlFor="name">Name</label>
        <div className="control">
          <input className={("input").concat(errors.name ? " is-danger": "")}
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              ref={register({ required })}
              disabled={isSubmitting}
            />
        </div>
        {errors.name && <p className="help is-danger">{errors.name.message}</p>}
      </div>

      <label htmlFor="email">
        <h5>Email</h5>
        <input
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
          }) }
          disabled={isSubmitting}
        />
        {errors.email && errors.email.type === 'required' && <div className="msg-error">E-mail is required</div>}
        {errors.email && errors.email.type === 'maxLength' && <div className="msg-error">Max length exceeded</div> }
        {errors.email && errors.email.type === 'pattern' && <div className="msg-error">invalid email address</div> }
      </label>

      <label htmlFor="question">
        <h5>Message</h5>
        <textarea
          ref={register({ required })}
          name="question"
          id="question"
          rows="3"
          placeholder="Your message"
          disabled={isSubmitting}
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>

      <div className="field">
        <div className="control">
          <button className="button is-link" type="submit" disabled={isSubmitting}>
            Send
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="page contact-page">
      <div className="text-side">
        <h2>Contact me</h2>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};

