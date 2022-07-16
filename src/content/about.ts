import { Translation } from '../language/types'

type AboutContent = {
  headTitle: string
  headDescription: string
  title: string
}

/**
  *Mallorca is one of the favorite destination all over the world to celebrate the dreamed wedding. No wonder why…This beautiful island offers you absolutely everything you are looking for. Since small romantic calas to the más acogedor rincón de la montaña, y no nos olvidemos del buen tiempo con el que cuenta esta isla.
  *Contamos con venues de todos los estilos que harán que te enamores a primera vista y desees quedarte ahí para siempre.
  *Tu boda no son solo unas intensas horas de evento, sino un viaje que debe ser perfecto desde principio a fin para que lo recuerdes como los momentos más impresionantes que se pueden vivir, como los momentos más importantes y significativos.
  *Organizar una boda no es tarea sencilla, lleva su tiempo aunque estés residiendo en la isla, pero el proceso se complica si resides en el extranjero…Por ello, queremos ayudarte a que puedas disfrutar del camino a tu gran día. Sin quebraderos de cabeza, sin inconvenientes. Creemos que es igual de importante que tanto el dia de tu boda, como el proceso de organizarla sea la mayor aventura de tu vida.
  *
  *
  *Mallorca is one of the favorite destinations all over the world to celebrate the dreamed wedding. No wonder why…This beautiful island offers you absolutely everything you are looking for. Since small romantic coves to the most welcoming corner of the mountain, and let's not forget the good weather that this island has.
  *We have venues of all styles that will make you fall in love at first sight and want to stay there forever.
  *Your wedding is not just a few intense hours of event, but a trip that must be perfect from beginning to end so that you remember it as the most impressive moments that can be experienced, as the most important and significant moments.
  *Organizing a wedding is not an easy task, it takes time even if you are living on the island, but the process is complicated if you live abroad... For this reason, we want to help you enjoy the way to your big day. No headaches, no hassles. We believe that it is just as important that both the day of your wedding and the process of organizing it be the greatest adventure of your life.
 */

export const aboutContent: Translation<AboutContent> = {
  en: {
    headTitle: 'About us',
    headDescription: 'The services that V&P provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'About us',
  },
  es: {
    headTitle: 'Sobre nosotros',
    headDescription: 'V&P provee servicios que incluyen una organización personalizada desde el inicio hasta el gran día de la boda. Bodas de destion en Mallorca.',
    title: 'Sobre nosotros',
  },
}
