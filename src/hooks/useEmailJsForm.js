import { useRef, useState } from 'react'

import { emailConfig, hasEmailConfig } from '../config/email'

const initialStatus = { type: 'idle', text: '' }

export function useEmailJsForm(messages) {
  const formRef = useRef(null)
  const [status, setStatus] = useState(initialStatus)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(initialStatus)

    const currentForm = formRef.current

    if (!currentForm?.checkValidity()) {
      currentForm?.reportValidity()
      return
    }

    if (new FormData(currentForm).get('website')) {
      currentForm.reset()
      setStatus({
        type: 'success',
        text: messages.success,
      })
      return
    }

    if (!hasEmailConfig) {
      setStatus({
        type: 'info',
        text: messages.missingConfig,
      })
      return
    }

    try {
      setIsSending(true)
      const { default: emailjs } = await import('@emailjs/browser')

      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, {
        publicKey: emailConfig.publicKey,
      })
      formRef.current?.reset()
      setStatus({
        type: 'success',
        text: messages.success,
      })
    } catch (error) {
      setStatus({
        type: 'error',
        text: error?.text || messages.error,
      })
    } finally {
      setIsSending(false)
    }
  }

  return {
    formRef,
    handleSubmit,
    isSending,
    status,
  }
}
