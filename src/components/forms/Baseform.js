import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDisclosure } from '@chakra-ui/core'

import SendFormDataModal from './SendFormDataModal'
import { BaseformContext } from './BaseformContext'

import { postData } from './dataLayer'

const SHOW_MODAL_DURATION = 3000

const MESSAGE_PROCESSING = 'Отправка данных. Пожалуйста подождите'
const MESSAGE_DONE       = 'Данные сохранены.'
const MESSAGE_FAILURE    = 'Данные не сохранены. Пожалуйста повторите вашу попытку позже'


export default ({apiUrl, msgProcessing, msgDone, msgFailure, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    handleSubmit,
    //setError,
    reset,
    register,
    errors,    
  } = useForm()
  const [status, setStatus] = useState({})
  const focusRef = useRef()
  const abortController = new window.AbortController()

  const close = () => {
    onClose()
    focusRef.current && focusRef.current.focus()
  }  

  const waitAndClose = () => setTimeout(() => close(), SHOW_MODAL_DURATION);

  const onSubmit = (data, e) => {
    e.preventDefault();
   
    setStatus(() => ({ wait: true, message: msgProcessing || MESSAGE_PROCESSING }))
    onOpen()

    postData(data, apiUrl, abortController,
      () => {
        setStatus(() => ({ wait: false, message: msgDone || MESSAGE_DONE }))
        waitAndClose()
        reset()
      },
      (error) => {
        if (error.name === 'AbortError') {
          close()
        } else {
          const msg = `${msgFailure || MESSAGE_FAILURE} ${error.message}`
          //setError('submit', 'submitError', msg )
          setStatus(() => ({ wait: false, message: msg }))
          waitAndClose() 
        }
      }
    ) 
  }

 
  return (
    <>    
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <BaseformContext.Provider value={{errors, register, focusRef}}>
          {children}
        </BaseformContext.Provider>
      </form>
      <SendFormDataModal title="Обработка данных" isOpen={isOpen} onClose={onClose} status={status} 
        finalFocusRef={focusRef}
        onAbort={() => abortController.abort()}
      />
    </>
  )
}