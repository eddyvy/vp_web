import { Translation } from '../language/types'

type ServicesContent = {
  headTitle: string
  headDescription: string
  title: string
  text1: string
  text2: string
  text3: string
  button: string
}

export const servicesContent: Translation<ServicesContent> = {
  en: {
    headTitle: 'Services',
    headDescription: 'The services that V&P provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'V&P Services',
    text1: 'Our priority is that you enjoy both the journey and, of course, the most important day of your life, without you having to worry about anything.',
    text2: 'Therefore, the service we offer is a complete organization and coordination.',
    text3: 'We stand out for our personalized and close treatment. Each couple is unique and we will take care of fulfilling your wishes.',
    button: 'Contact us',
  },
  es: {
    headTitle: 'Servicios',
    headDescription: 'V&P provee servicios que incluyen una organización personalizada desde el inicio hasta el gran día de la boda. Bodas de destion en Mallorca.',
    title: 'Servicios de V&P',
    text1: 'Nuestra prioridad es que disfrutéis tanto del camino como por su puesto del día más importante de vuestra vida, sin que tengáis que preocuparos de nada.',
    text2: 'Por ello, el servicio que ofrecemos es una organización y coordinación completa.',
    text3: 'Destacamos por nuestro trato personalizado y cercano. Cada pareja es única y nos encargaremos de cumplir vuestros deseos.',
    button: 'Contáctanos',
  },
}
