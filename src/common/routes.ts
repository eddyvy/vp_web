import { AppRoutes } from './types'
import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Contact } from '../pages/Contact'
import { CookiesPolicy } from '../pages/CookiesPolicy'
import { Disclaimer } from '../pages/Disclaimer'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { Services } from '../pages/Services'
import { Locations } from '../pages/Locations'

export type CommonRoutes =
  | 'HOME'
  | 'SERVICES'
  | 'LOCATIONS'
  | 'ABOUT'
  | 'CONTACT'
  | 'COOKIES'
  | 'DISCLAIMER'
  | 'PRIVACY'

export const allRoutes: AppRoutes = {
  HOME: { Component: Home, path: {
    es: '/inicio',
    en: '/',
  } },
  SERVICES: {
    Component: Services, path: {
      es: '/servicios',
      en: '/services',
    },
  },
  LOCATIONS: {
    Component: Locations, path: {
      es: '/lugares',
      en: '/locations',
    },
  },
  ABOUT: { Component: AboutUs, path: {
    es: '/sobre-nosotros',
    en: '/about',
  } },
  CONTACT: { Component: Contact, path: {
    es: '/contacto',
    en: '/contact',
  } },
  COOKIES: { Component: CookiesPolicy, path: {
    es: '/politica-cookies',
    en: '/cookies-policy',
  } },
  DISCLAIMER: { Component: Disclaimer, path: {
    es: '/aviso-legal',
    en: '/disclaimer',
  } },
  PRIVACY: { Component: PrivacyPolicy, path: {
    es: '/politica-privacidad',
    en: '/privacy-policy',
  } },
}
