import { Translation } from '../language/types'

type HomeContent = {
  headTitle: string
  headDescription: string
  title: string
  button1: string
  text1: string
  subtitle1: string
  button2: string
}

export const homeContent: Translation<HomeContent> = {
  en: {
    headTitle: 'Wedding destination Mallorca',
    headDescription: 'V&P offers the best wedding experiences in Mallorca. Enjoy the best day of your life with V&P.',
    title: 'Weddings destination Mallorca',
    button1: 'I want to marry',
    text1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi esse veniam, culpa asperiores provident sapiente,'
      + 'placeat beatae alias officia aperiam, quae porro quibusdam facilis eveniet quisquam dolorum delectus natus.',
    subtitle1: 'The best service you can have',
    button2: 'Know more',
  },
  es: {
    headTitle: 'Bodas y Eventos',
    headDescription: 'V&P ofrece la mejor experiencia para casarse en Mallorca. Disfruta el mejor día de tu vida con V&P.',
    title: 'Bodas en Mallorca',
    button1: 'Quiero casarme',
    text1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi esse veniam, culpa asperiores provident sapiente,'
      + 'placeat beatae alias officia aperiam, quae porro quibusdam facilis eveniet quisquam dolorum delectus natus.',
    subtitle1: 'El mejor servicio que puedas imaginar',
    button2: 'Saber más',
  },
}
