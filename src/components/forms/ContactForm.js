import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDisclosure } from '@chakra-ui/core'

import SendFormDataModal from './SendFormDataModal'
import { EmailControl, NameControl, NoteControl, Submit } from './formControls'
import { saveContact } from './dataLayer'


const SHOW_MODAL_DURATION = 5000

const MESSAGE_PROCESSING = 'Отправка данных. Пожалуйста подождите'
const MESSAGE_DONE = 'Данные сохранены. Спасибо, мы обязательно свяжемся с вами'
const MESSAGE_FAILURE = 'Данные не сохранены. Пожалуйста повторите вашу попытку позже'


export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [status, setStatus] = useState({})
  const emailRef = useRef()

  const abortController = new window.AbortController()

  const waitAndClose = () => console.log(2222222222222222222222222222)

//  const waitAndClose = () => setTimeout(() => {
//    emailRef.current.focus()
//    onClose()
//    emailRef.current.focus()
//    console.log(emailRef)
// 
//  }, SHOW_MODAL_DURATION);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
  } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault();
   
    setStatus(() => ({ wait: true, message: MESSAGE_PROCESSING }))
    onOpen()

    saveContact(data, abortController,
      () => {
        setStatus(() => ({ wait: false, message: MESSAGE_DONE }))
        reset()
        waitAndClose()
      },
      (error) => {
        if (error.name === 'AbortError') {
          setStatus(() => ({ wait: false, message: 'aborted' }))  
        } else {
          const msg = `${MESSAGE_FAILURE} ${error.message}`
          setStatus(() => ({ wait: false, message: msg }))
          setError(
            'submit',
            'submitError',
            msg
          )
        }
        waitAndClose() 
      }
    ) 
  }

  const customRegister = (e, o) => {
    register(e, o)
    emailRef.current = e
  }
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <EmailControl register={customRegister} errors={errors} />
        <NameControl register={register} errors={errors} />
        <NoteControl register={register} errors={errors} />
    
        <Submit>Отправить</Submit>
      </form>

      <SendFormDataModal title="Обработка данных" isOpen={isOpen} onClose={onClose} status={status} 
        finalFocusRef={emailRef}
        onAbort={() => {
          abortController.abort()
          setStatus(() => ({ wait: false, message: 'aborted' }))
          waitAndClose()
        }}
       />
    </>
  )
}