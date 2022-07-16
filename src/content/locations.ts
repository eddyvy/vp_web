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
}

export const locationsContent: Translation<LocationsContent> = {
  en: {
    headTitle: 'Locations and Vines',
    headDescription: 'The services that V&P provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'Locations and Vines',
    text1: 'Mallorca is one of the favorite destinations all over the world to celebrate the dream wedding.',
    text2: 'No wonder why…This beautiful island offers you absolutely everything you are looking for.',
    text3: 'Since it is a small romantic cove to the most welcoming corner of the mountain, let\'s not forget the good weather that this island has.',
    text4: 'We have venues of all styles that will make you fall in love at first sight and want to stay there forever.',
    text5: 'Where to celebrate your wedding is the main decision where the complete history will be built.',
    text6: 'Mallorca has spectacular locations, elegant hotels, lovely rustic venues and a sight more. Always accompanied by good weather that characterizes the island.',
    text7: 'If you know how is your perfect place to celebrate your big day but you have not found it, don\'t worry, we are here to introduce you to that spot!',
    text8: 'If you are not clear, we will offer you several possibilities that meet your pleasures and desires.',
    text9: 'We have no doubt that we will present you the space that characterizes you and makes you fall in love.',
    button: 'Contact us',
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
  },
}
