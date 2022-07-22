import { Translation } from '../language/types'

type LocationsContent = {
  headTitle: string
  headDescription: string
  title: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  text8: string
  text9: string
  button: string
  image1: string
  image2: string
}

export const locationsContent: Translation<LocationsContent> = {
  en: {
    headTitle: 'Locations and Venues',
    headDescription: 'The services that V&P provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'Locations and Venues',
    text1: 'Mallorca is one of the favorite destinations all over the world to celebrate the dreamed wedding.',
    text2: 'No wonder why…This beautiful island offers absolutely everything you are looking for.',
    text3: 'Since small romantic coves to the most welcoming mountain corner, you will discover the beauty on this island.',
    text4: 'We have venues of all styles that will make you fall in love at first sight and want to stay there forever.',
    text5: 'Your wedding location will set the whole history of modeling your big day.',
    text6: 'Mallorca has spectacular locations, elegant hotels, lovely rustic venues and much more. Always accompanied by the beautiful weather that characterizes the island.',
    text7: 'If you know how is your perfect place to celebrate your big day but you have not found it yet, don\'t worry, we are here to introduce you to that spot!',
    text8: 'We will offer you several possibilities that meet your requirements and desires.',
    text9: 'We have no doubt that we will present you the space that characterizes you and makes you fall in love.',
    button: 'Contact us',
    image1: 'https://i.imgur.com/ph8BYr8.jpg',
    image2: 'https://i.imgur.com/kQSYYch.jpg',
  },
  es: {
    headTitle: 'Lugares y Fincas',
    headDescription: 'V&P provee servicios que incluyen una organización personalizada desde el inicio hasta el gran día de la boda. Bodas de destion en Mallorca.',
    title: 'Lugares y Fincas',
    text1: 'Mallorca es uno de los destinos preeferidos alrededor del mundo para celebrar la boda soñada.',
    text2: 'Sin lugar a dudas esta preciosa isla ofrece absolutamente todo lo que estáis buscando.',
    text3: 'Desde una pequeña cala romántica hasta el lugar más acogedor en la montaña, no olvidemos el buen tiempo que tiene la isla.',
    text4: 'Contamos con villas de todos los estilos que harán que te enamores a primera vista y desees quedarte ahí para siempre.',
    text5: 'El lugar de la celebración es sin duda la base desde donde se irá construyendo la totalidad de la historia.',
    text6: 'Mallorca cuenta con espectaculares villas, elegantes hoteles, encantadoras fincas rústicas y mucho más. Siempre acompañado del buen tiempo que caracteriza la isla.',
    text7: 'Si ya sabes cómo es el lugar perfecto para celebrar tu gran día pero no lo has encontrado, no te preocupes, estamos aquí para presentarte ese espacio!',
    text8: 'Si no lo tienes claro, te ofreceremos varias posibilidades que cumplan con tus gustos y deseos.',
    text9: 'No tenemos ninguna duda de que te presentaremos el espacio que te caracteriza y enamora.',
    button: 'Contáctanos',
    image1: 'https://i.imgur.com/ph8BYr8.jpg',
    image2: 'https://i.imgur.com/kQSYYch.jpg',
  },
}
