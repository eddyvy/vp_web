import { Translation } from '../language/types'

type ContactContent = {
  headTitle: string
  headDescription: string
  title: string
  name: string
  email: string
  message: string
  submitButton: string
}

export const contactContent: Translation<ContactContent> = {
  en: {
    headTitle: 'Contact',
    headDescription: 'You can contact V&P for any doubt or suggestion about our services.',
    title: 'Contact us',
    name: 'Your name',
    email: 'Your email address',
    message: 'Write your message',
    submitButton: 'Submit',
  },
  es: {
    headTitle: 'Contacto',
    headDescription: 'Puede contactar con V&P para cualquier duda o sugerencia sobre sus servicios',
    title: 'Contacto',
    name: 'Tu nombre',
    email: 'Tu dirección de email',
    message: 'Escribe tu mensaje',
    submitButton: 'Enviar',
  },
}
