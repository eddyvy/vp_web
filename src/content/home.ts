import { Translation } from '../language/types'

type HomeContent = {
  headTitle: string
  headDescription: string
  title: string
  button1: string
  text1: string
  text2: string
  subtitle1: string
  button2: string
  subtitle2: string
  button3: string
  subtitle3: string
  button4: string
  carouselLabel1: string
  carouselLabel2: string
  carouselLabel3: string
  carouselLabel4: string
}

export const homeContent: Translation<HomeContent> = {
  en: {
    headTitle: 'Wedding destination Mallorca',
    headDescription: 'V&P offers the best wedding experiences in Mallorca. Enjoy the best day of your life with V&P.',
    title: 'Weddings destination Mallorca',
    button1: 'I want to marry',
    text1: 'Mallorca is one of the favorite destination all over the world to celebrate the dreamed wedding. ',
    text2: 'No wonder why… This beautiful island offers you absolutely everything you are looking for.',
    subtitle1: 'The best service you can have',
    button2: 'A trip for you',
    subtitle2: 'And they all lived happily ever after',
    button3: 'Come to Mallorca',
    subtitle3: 'V&P Experience',
    button4: 'More info',
    carouselLabel1: 'Your dream day',
    carouselLabel2: 'Mallorca island',
    carouselLabel3: 'Remember for ever',
    carouselLabel4: 'As you wish',
  },
  es: {
    headTitle: 'Bodas y Eventos',
    headDescription: 'V&P ofrece la mejor experiencia para casarse en Mallorca. Disfruta el mejor día de tu vida con V&P.',
    title: 'Bodas en Mallorca',
    button1: 'Quiero casarme',
    text1: 'Mallorca es uno de los destinos favoritos alrededor del mundo para celebrar la boda soñanda.',
    text2: 'Sin lugar a dudas esta bonita isla ofrece absolutamente todo lo que estáis buscando.',
    subtitle1: 'El mejor servicio que puedas imaginar',
    button2: 'Un viaje para vosotros',
    subtitle2: 'Y vivieron felices para siempre',
    button3: 'Ven a Mallorca',
    subtitle3: 'Experiencia V&P',
    button4: 'Saber más',
    carouselLabel1: 'Tu día soñado',
    carouselLabel2: 'Isla de Mallorca',
    carouselLabel3: 'Recuerdo para siempre',
    carouselLabel4: 'A tu gusto',
  },
}
