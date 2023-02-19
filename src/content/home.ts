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
  carouselLabel5: string
  carouselLabel6: string
  carouselLabel7: string
  paragraph: string
  imageCar1: string
  imageCar2: string
  imageCar3: string
  imageCar4: string
  imageCar5: string
  imageCar6: string
  imageCar7: string
  video1: string
  video2: string
}

export const homeContent: Translation<HomeContent> = {
  en: {
    headTitle: 'Wedding destination Mallorca',
    headDescription:
      'VP offers the best wedding experiences in Mallorca. Enjoy the best day of your life with VP.',
    title: 'Your Wedding in Mallorca',
    button1: 'Yes, I do!',
    text1:
      'Mallorca is one of the favorite destination all over the world to celebrate the dreamed wedding. ',
    text2:
      'No wonder why… This beautiful island offers you absolutely everything you are looking for.',
    subtitle1: 'The best service you can have',
    button2: 'A trip for you',
    subtitle2: 'And they all lived happily ever after',
    button3: 'Come to Mallorca',
    subtitle3: 'VP Experience',
    button4: 'More info',
    carouselLabel1: 'Your dream day',
    carouselLabel2: 'Mallorca island',
    carouselLabel3: 'Remember it forever',
    carouselLabel4: 'As you wish',
    carouselLabel5: 'Enjoy the experience',
    carouselLabel6: 'Feel the moment',
    carouselLabel7: 'Perfect',
    imageCar1: 'https://i.imgur.com/4XDzs3d.jpg',
    imageCar2: 'https://i.imgur.com/LP6d4Xn.jpg',
    imageCar3: 'https://i.imgur.com/1Y8vL0l.jpg',
    imageCar4: 'https://i.imgur.com/isN2ywO.jpg',
    imageCar5: 'https://i.imgur.com/D7L71zA.jpg',
    imageCar6: 'https://i.imgur.com/zh1zUjg.jpg',
    imageCar7: 'https://i.imgur.com/Aqp26iT.jpg',
    video1:
      'https://storage.googleapis.com/valls-media/vp-web/vista-mallorca-cala-1.mp4',
    video2: 'https://storage.googleapis.com/valls-media/vp-web/proposicion.mp4',
    // paragraph: `
    //   Holiiiiiiii novia Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum praesentium maxime quos
    //   commodi maiores exercitationem
    //   atque temporibus facere quaerat vitae, iure recusandae, quasi rem incidunt nisi laborum optio nostrum.
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum praesentium maxime quos commodi
    //   maiores exercitationem
    //   atque temporibus facere quaerat vitae, iure recusandae, quasi rem incidunt nisi laborum optio nostrum.
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum praesentium maxime quos commodi
    //   maiores exercitationem
    //   atque temporibus facere quaerat vitae, iure recusandae, quasi rem incidunt nisi laborum optio nostrum.
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum praesentium maxime quos commodi
    //   maiores exercitationem
    //   atque temporibus facere quaerat vitae, iure recusandae, quasi rem incidunt nisi laborum optio nostrum.
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum praesentium maxime quos commodi
    //   maiores exercitationem
    //   atque temporibus facere quaerat vitae, iure recusandae, quasi rem incidunt nisi laborum optio nostrum.
    // `,
    paragraph: '',
  },
  es: {
    headTitle: 'Bodas y Eventos',
    headDescription:
      'VP ofrece la mejor experiencia para casarse en Mallorca. Disfruta el mejor día de tu vida con VP.',
    title: 'Tu Boda en Mallorca',
    button1: '¡Sí, quiero!',
    text1:
      'Mallorca es uno de los destinos favoritos alrededor del mundo para celebrar la boda soñanda.',
    text2:
      'Sin lugar a dudas esta bonita isla ofrece absolutamente todo lo que estáis buscando.',
    subtitle1: 'El mejor servicio que puedas imaginar',
    button2: 'Un viaje para vosotros',
    subtitle2: 'Y vivieron felices para siempre',
    button3: 'Ven a Mallorca',
    subtitle3: 'Experiencia VP',
    button4: 'Saber más',
    carouselLabel1: 'Tu día soñado',
    carouselLabel2: 'Jonathan Borba',
    carouselLabel3: 'Leonardo Miranda',
    carouselLabel4: 'Nathan Dumlao',
    carouselLabel5: 'Disfruta la experiencia',
    carouselLabel6: 'Siente el momento',
    carouselLabel7: 'Perfecto',
    imageCar1: 'https://i.imgur.com/4XDzs3d.jpg',
    imageCar2: 'https://i.imgur.com/LP6d4Xn.jpg',
    imageCar3: 'https://i.imgur.com/1Y8vL0l.jpg',
    imageCar4: 'https://i.imgur.com/isN2ywO.jpg',
    imageCar5: 'https://i.imgur.com/D7L71zA.jpg',
    imageCar6: 'https://i.imgur.com/zh1zUjg.jpg',
    imageCar7: 'https://i.imgur.com/Aqp26iT.jpg',
    video1:
      'https://storage.googleapis.com/valls-media/vp-web/vista-mallorca-cala-1.mp4',
    video2: 'https://storage.googleapis.com/valls-media/vp-web/proposicion.mp4',
    //     paragraph: `
    //       VP es la empresa especializada en la organización de bodas de destino en Mallorca. Organizar una boda desde el extranjero puede ser toda una odisea, por lo que nosotros nos encargamos de que esa odisea se convierta en un camino de rosas que os conduzca al día más bonito de vuestra vida.
    //       Desde la elección del lugar perfecto, el catering, decoración, música, alojamiento, transporte, entretenimiento y mucho más!
    //       Nuestra prioridad es ofrecer un trato atento y personalizado para que todo el proceso se convierta en la gran aventura de vuestra vida.
    //       Mallorca es uno de los destinos preferidos alrededor del mundo para celebrar la boda soñada.

    // Sin lugar a dudas esta preciosa isla ofrece absolutamente todo lo que estáis buscando.

    // Desde una pequeña cala romántica hasta el lugar más acogedor en la montaña, no olvidemos el buen tiempo que tiene la isla.

    // Contamos con villas de todos los estilos que harán que te enamores a primera vista y desees quedarte ahí para siempre.

    // El lugar de la celebración es sin duda la base desde donde se irá construyendo la totalidad de la historia.

    //     `,
    paragraph: '',
  },
}
