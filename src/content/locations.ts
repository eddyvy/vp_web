import { Translation } from '../language/types'

type LocationsContent = {
  headTitle: string
  headDescription: string
  title: string
}

/**
    El lugar de la celebración es sin duda la base desde donde se irá construyendo la totalidad de la historia.
    Mallorca cuenta con espectaculares villas, elegantes hoteles, encantadoras fincas rústicas y mucho más. Siempre acompañado del buen tiempo que caracteriza la isla.
    Si ya sabes cómo es el lugar perfecto para celebrar tu gran día pero no lo has encontrado, no te preocupes, estamos aquí para presentarte ese espacio!
    Si no lo tienes claro, te ofreceremos varias posibilidades que cumplan con tus gustos y deseos.
    No tenemos ninguna duda de que te presentaremos el espacio que te caracteriza y enamora.
  */

export const locationsContent: Translation<LocationsContent> = {
  en: {
    headTitle: 'Locations and Vines',
    headDescription: 'The services that V&P provide includes the personalized plan from the first day until the big day arrives. Weddings destination in Mallorca.',
    title: 'Locations and Vines',
  },
  es: {
    headTitle: 'Lugares y Fincas',
    headDescription: 'V&P provee servicios que incluyen una organización personalizada desde el inicio hasta el gran día de la boda. Bodas de destion en Mallorca.',
    title: 'Lugares y Fincas',
  },
}
