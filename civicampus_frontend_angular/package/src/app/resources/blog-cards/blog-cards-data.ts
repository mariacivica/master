export interface BlogCard {
  title: string,
  subtitle: string,
  subtext: string,
  icon: string,
  route: string
}

export const blogCards: BlogCard[] = [
  {
    title: 'Lenguajes de Programación',
    subtitle: '',
    subtext: 'Lenguajes utilizados para escribir programas y scripts que ejecutan tareas específicas.',
    icon: 'bi-code-slash',
    route: '#'
  },
  {
    title: 'Frameworks Front-End',
    subtitle: '',
    subtext: 'Parte del desarrollo web que se centra en el diseño y la implementación de la interfaz de usuario (interacción con la app o sitio web).',
    icon: 'bi-laptop',
    route: 'front'
  },
  {
    title: 'Frameworks Back-End',
    subtitle: '',
    subtext: 'Parte del desarrollo web que se encarga del servidor, base de datos y la lógica de la aplicación. Gestión, proceso de datos y garantía de buen funcionamiento.',
    icon: 'bi-server',
    route: 'back'
  },
  {
    title: 'Herramientas BI',
    subtitle: '',
    subtext: 'Proceso de inspeccionar, limpiar y modelar datos con el objetivo de descubrir información útil, llegar a conclusiones y apoyar la toma de decisiones.',
    icon: 'bi-bar-chart-line',
    route: 'h-bi'
  },
  {
    title: 'Herramientas Desarrollo/Devops',
    subtitle: '',
    subtext: 'Herramientas y prácticas que combinan el desarrollo de software (Dev) y las operaciones de IT (Ops).',
    icon: 'bi-tools',
    route: '#'
  },
  {
    title: 'Herramientas Transformación de Datos',
    subtitle: '',
    subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
    icon: 'bi-database-fill-gear',
    route: '#'
  },
  {
    title: 'Plataformas de Datos',
    subtitle: '',
    subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar grandes volúmenes de datos.',
    icon: 'bi-cloud',
    route: 'h-plataformas-datos'
  },
  {
    title: 'Otras herramientas de Datos',
    subtitle: '',
    subtext: 'Herramientas adicionales utilizadas en el manejo y análisis de datos.',
    icon: 'bi-collection',
    route: '#'
  },
  {
    title: 'Herramientas Data Science',
    subtitle: '',
    subtext: 'Conjunto de herramientas utilizadas en la ciencia de datos para análisis, visualización y aprendizaje automático.',
    icon: 'bi-graph-up',
    route: '#'
  },
  {
    title: 'Herramientas Gobierno',
    subtitle: '',
    subtext: 'Herramientas utilizadas para la gobernanza de datos y la administración de políticas de datos.',
    icon: 'bi-shield-lock',
    route: '#'
  },
  {
    title: 'Arquitectura y Habilidades Core',
    subtitle: '',
    subtext: 'Principios fundamentales y habilidades esenciales para la arquitectura de sistemas.',
    icon: 'bi-diagram-3',
    route: '#'
  }
];
