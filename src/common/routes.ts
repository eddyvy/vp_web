import { AppRoutes } from './types'
import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Contact } from '../pages/Contact'
import { CookiesPolicy } from '../pages/CookiesPolicy'
import { LegalAdvise } from '../pages/LegalAdvise'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'

export type CommonRoutes =
  | 'HOME'
  | 'ABOUT'
  | 'CONTACT'
  | 'COOKIES'
  | 'LEGAL_ADVICE'
  | 'PRIVACY'

export const allRoutes: AppRoutes = {
  HOME: { Component: Home, path: {
    es: '/',
    en: '/home',
  } },
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
