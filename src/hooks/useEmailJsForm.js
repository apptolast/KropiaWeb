import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { emailConfig, hasEmailConfig } from '../config/email'

const initialStatus = { type: 'idle', text: '' }

export function useEmailJsForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(initialStatus)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(initialStatus)

    if (!hasEmailConfig) {
      setStatus({
        type: 'info',
        text: 'Formulario listo. Falta configurar las variables VITE_EMAILJS_* para activar el envío.',
      })
      return
    }

    try {
      setIsSending(true)
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, {
        publicKey: emailConfig.publicKey,
      })
      formRef.current?.reset()
      setStatus({
        type: 'success',
        text: 'Solicitud enviada. Le contactaremos lo antes posible.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        text: error?.text || 'No se ha podido enviar la solicitud. Intente de nuevo en unos minutos.',
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
