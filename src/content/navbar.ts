import { Translation } from '../language/types'

type NavbarContent = {
  home: string
  services: string
  locations: string
  about: string
  contact: string
}

export const navbarContent: Translation<NavbarContent> = {
  es: {
    home: 'Inicio',
    services: 'Servicios',
    locations: 'Lugares',
    about: 'Nosotros',
    contact: 'Contacto',
  },
  en: {
    home: 'Home',
    services: 'Services',
    locations: 'Locations',
    about: 'About',
    contact: 'Contact',
  },
}
