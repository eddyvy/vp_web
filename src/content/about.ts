import { Translation } from '../language/types'

type AboutContent = {
  headTitle: string
  headDescription: string
  title: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  button: string
  image1: string
}

export const aboutContent: Translation<AboutContent> = {
  en: {
    headTitle: 'About us',
    headDescription: 'V&P is focused on weddings destination at Mallorca, where our couples receive an attentive and personalized service.',
    title: 'About us',
    text1: 'V&P is focused on weddings destination at Mallorca, where our couples receive an attentive and personalized service.',
    text2: 'Your wedding is not just a few intense hours of event, but a trip that must be perfect from beginning to end so that you remember it as the most impressive moments that can be experienced, as the most important and significant moments.',
    text3: 'Organizing a wedding is not an easy task, it takes time even if you are living on the island, but the process is even more complicated if you live abroad...',
    text4: 'For this reason, we want to help you enjoy the way to your big day. No headaches, no hassles.',
    text5: 'We believe that it is just as important that both the day of your wedding and the process of organizing it.',
    text6: 'We want that process to be the greatest adventure of your life.',
    button: 'Contact us',
    image1: 'https://i.imgur.com/OG6VpiN.jpg',
  },
  es: {
    headTitle: 'Sobre nosotros',
    headDescription: 'V&P se centra en realizar bodas en Mallorca, donde las parejas reciben un trato atento y personalizado.',
    title: 'Sobre nosotros',
    text1: 'V&P se centra en realizar bodas en Mallorca, donde las parejas reciben un trato atento y personalizado.',
    text2: 'Vuestra boda no se trata únicamente de un evento de unas pocas e intensas horas, sino que se trata de un viaje que debe ser perfecto de principio a fin, de forma que lo recordéis como muchos de los momentos más impresionantes que hayáis experimentado.',
    text3: 'Organizar una boda no es tarea fácil, toma mucho tiempo incluso viviendo en la isla y el proceso se complica más si vives fuera...',
    text4: 'Por esa razón queremos ayudaros a disfrutar de vuestro gran día, sin dolores de cabeza ni problemas.',
    text5: 'Nosotros creemos que es igual de importante el día de vuestra boda como el proceso de organización de la misma.',
    text6: 'Queremos que dicho proceso sea una gran aventura en vuestra vida.',
    button: 'Contáctanos',
    image1: 'https://i.imgur.com/OG6VpiN.jpg',
  },
}
