import { AppRoutes } from './types'
import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Contact } from '../pages/Contact'
import { CookiesPolicy } from '../pages/CookiesPolicy'
import { LegalAdvise } from '../pages/LegalAdvise'
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
  | 'LEGAL_ADVICE'
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
  LEGAL_ADVICE: { Component: LegalAdvise, path: {
    es: '/aviso-legal',
    en: '/legal-advise',
  } },
  PRIVACY: { Component: PrivacyPolicy, path: {
    es: '/politica-privacidad',
    en: '/privacy-policy',
  } },
}
