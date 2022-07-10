import { Translation } from '../language/types'

type FooterContent = {
  about: string
  privacy: string
  cookies: string
  disclaimer: string
}

export const footerContent: Translation<FooterContent> = {
  es: {
    about: 'Sobre Nosotros',
    privacy: 'Politica de privacidad',
    cookies: 'Politica de cookies',
    disclaimer: 'Aviso legal',
  },
  en: {
    about: 'About Us',
    privacy: 'Privacy policy',
    cookies: 'Cookies policy',
    disclaimer: 'Disclaimer',
  },
}
