import React, { useState } from 'react'
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
  const [status, setStatus] = useState({ wait: true, message:'Processing...' })
  
  const waitAndClose = () => setTimeout(function() {
    onClose()
  }, SHOW_MODAL_DURATION);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
  } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault();
    
    saveContact(data, 
      () => {
        setStatus(() => ({ wait: true, message: MESSAGE_PROCESSING }))
        onOpen()
      },
      () => {
        setStatus(() => ({ wait: false, message: MESSAGE_DONE }))
        reset()
        waitAndClose()
      },
      (error) => {
        const msg = `${MESSAGE_FAILURE} ${error.message}`
        setStatus(() => ({ wait: false, message: msg }))
        setError(
          'submit',
          'submitError',
          msg
        )
        waitAndClose() 
      }
    ) 
  }


  return (
    <>
      <SendFormDataModal title="Обработка данных" isOpen={isOpen} onClose={onClose} status={status} />

      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <EmailControl register={register} errors={errors} />
        <NameControl register={register} errors={errors} />
        <NoteControl register={register} errors={errors} />
    
        <Submit>Отправить</Submit>
      </form>
    </>
  )
}
