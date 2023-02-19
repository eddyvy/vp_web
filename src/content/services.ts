import { Translation } from '../language/types'

type ServicesContent = {
  headTitle: string
  headDescription: string
  title: string
  text1: string
  text2: string
  text3: string
  button: string
  image1: string
  image2: string
}

export const servicesContent: Translation<ServicesContent> = {
  en: {
    headTitle: 'Services',
    headDescription:
      'The services that VP provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'Our Services',
    text1:
      'Our priority is that you enjoy both the journey and, of course, the most important day of your life, without you having to worry about anything.',
    text2:
      'Therefore, the service we offer is a complete organization and coordination.',
    text3:
      'We stand out for our personalized and close treatment. Each couple is unique and we will take care of fulfilling your wishes.',
    button: 'Contact us',
    image1: 'https://i.imgur.com/sqAMZJM.jpg',
    image2: 'https://i.imgur.com/N2Hw3fc.jpg',
  },
  es: {
    headTitle: 'Servicios',
    headDescription:
      'VP provee servicios que incluyen una organización personalizada desde el inicio hasta el gran día de la boda. Bodas de destion en Mallorca.',
    title: 'Nuestros Servicios',
    text1:
      'Nuestra prioridad es que disfrutéis tanto del camino como por su puesto del día más importante de vuestra vida, sin que tengáis que preocuparos de nada.',
    text2:
      'Por ello, el servicio que ofrecemos es una organización y coordinación completa.',
    text3:
      'Destacamos por nuestro trato personalizado y cercano. Cada pareja es única y nos encargaremos de cumplir vuestros deseos.',
    button: 'Contáctanos',
    image1: 'https://i.imgur.com/sqAMZJM.jpg',
    image2: 'https://i.imgur.com/N2Hw3fc.jpg',
  },
}
