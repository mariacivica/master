export interface blogcard {
  title: string,
  subtitle: string,
  subtext: string,
  image: string,
  route: string
}

export const blogcards: blogcard[] = [
  {
      title: 'Lenguajes de Programación',
      subtitle: '',
      subtext: 'Lenguajes utilizados para escribir programas y scripts que ejecutan tareas específicas.',
      image: 'assets/images/bg/bg1.jpg',
      route: '#'
  },
  {
      title: 'Frameworks Front-End',
      subtitle: '',
      subtext: 'Parte del desarrollo web que se centra en el diseño y la implementación de la interfaz de usuario (interacción con la app o sitio web).',
      image: 'assets/images/bg/bg2.jpg',
      route: 'front'
  },
  {
      title: 'Frameworks Back-End',
      subtitle: '',
      subtext: 'Parte del desarrollo web que se encarga del servidor, base de datos y la lógica de la aplicación. Gestión, proceso de datos y garantía de buen funcionamiento.',
      image: 'assets/images/bg/bg3.jpg',
      route: 'back'
  },
  {
      title: 'Herramientas BI',
      subtitle: '',
      subtext: 'Proceso de inspeccionar, limpiar y modelar datos con el objetivo de descubrir información útil, llegar a conclusiones y apoyar la toma de decisiones.',
      image: 'assets/images/bg/bg4.jpg',
      route: 'analisis-datos'
  },
  {
      title: 'Herramientas Desarrollo/Devops',
      subtitle: '',
      subtext: 'Herramientas y prácticas que combinan el desarrollo de software (Dev) y las operaciones de IT (Ops).',
      image: 'assets/images/bg/bg5.jpg',
      route: '#'
  },
  {
    title: 'Herramientas Transformación de Datos',
    subtitle: '',
    subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
    image: 'assets/images/bg/bg6.jpg',
    route: '#'
  },
  {
      title: 'Plataformas de Datos',
      subtitle: '',
      subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
      image: 'assets/images/bg/bg7.jpg',
      route: 'ingenieria-datos'
  },
  {
      title: 'Otras herramientas de Datos',
      subtitle: '',
      subtext: 'Herramientas adicionales utilizadas en el manejo y análisis de datos.',
      image: 'assets/images/bg/bg8.jpg',
      route: '#'
  },
  {
      title: 'Herramientas Data Science',
      subtitle: '',
      subtext: 'Conjunto de herramientas utilizadas en la ciencia de datos para análisis, visualización y aprendizaje automático.',
      image: 'assets/images/bg/bg9.jpg',
      route: '#'
  },
  {
      title: 'Herramientas Gobierno',
      subtitle: '',
      subtext: 'Herramientas utilizadas para la gobernanza de datos y la administración de políticas de datos.',
      image: 'assets/images/bg/bg10.jpg',
      route: '#'
  },
  {
      title: 'Arquitectura y Habilidades Core',
      subtitle: '',
      subtext: 'Principios fundamentales y habilidades esenciales para la arquitectura de sistemas.',
      image: 'assets/images/bg/bg11.jpg',
      route: '#'
  }
];
