import { Translation } from '../language/types'

type ContactContent = {
  headTitle: string
  headDescription: string
  title: string
  name: string
  email: string
  message: string
  submitButton: string
  sentMsg: string
}

export const contactContent: Translation<ContactContent> = {
  en: {
    headTitle: 'Contact',
    headDescription:
      'You can contact VP for any doubt or suggestion about our services.',
    title: 'Contact us',
    name: 'Your name',
    email: 'Your email address',
    message: 'Write your message',
    submitButton: 'Submit',
    sentMsg: 'Your message have been submitted',
  },
  es: {
    headTitle: 'Contacto',
    headDescription:
      'Puede contactar con VP para cualquier duda o sugerencia sobre sus servicios',
    title: 'Contacto',
    name: 'Tu nombre',
    email: 'Tu dirección de email',
    message: 'Escribe tu mensaje',
    submitButton: 'Enviar',
    sentMsg: 'Su mensaje ha sido enviado',
  },
}
