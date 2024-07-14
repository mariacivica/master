export interface blogcard {
  title: string,
  subtitle: string,
  subtext: string,
  image: string,
  route: string
}

export const blogcards: blogcard[] = [
  {
      title: 'Plataformas de Datos',
      subtitle: '',
      subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
      image: 'assets/images/bg/bg1.jpg',
      route: 'ingenieria-datos'
  },
  {
    title: 'Transformación de Datos',
    subtitle: '',
    subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
    image: 'assets/images/bg/bg1-2.jpg',
    route: '#'
},
  {
      title: 'Herramientas BI',
      subtitle: '',
      subtext: 'Proceso de inspeccionar, limpiar y modelar datos con el objetivo de descubrir información útil, llegar a conclusiones y apoyar la toma de decisiones.',
      image: 'assets/images/bg/bg2.jpg',
      route: 'analisis-datos'
  },
  {
      title: 'Frameworks Front-End',
      subtitle: '',
      subtext: 'Parte del desarrollo web que se centra en el diseño y la implementación de la interfaz de usuario (interacción con la app o sitio web).',
      image: 'assets/images/bg/bg3.jpg',
      route: 'front'
  },
  {
      title: 'Frameworks Back-End',
      subtitle: '',
      subtext: 'Parte del desarrollo web que se encarga del servidor, base de datos y la lógica de la aplicación. Gestión, proceso de datos y garantía de buen funcionamiento.',
      image: 'assets/images/bg/bg4.jpg',
      route: 'back'
  },
];
