export interface blogcard {
    title: string,
    subtitle: string,
    subtext: string,
    image: string
}

export const blogcards: blogcard[] = [

    {
        title: 'Ingeniería de Datos',
        subtitle: '',
        subtext: 'Diseño, construcción y gestión de infraestructuras y sistemas que permiten recopilar, almacenar, y procesar  grandes volúmenes de datos.',
        image: 'assets/images/bg/bg1.jpg'
    },
    {
        title: 'Análisis de Datos',
        subtitle: '',
        subtext: 'Proceso de inspeccionar, limpiar y modelar datos con el objetivo de descubrir información útil, llegar a conclusiones y apoyar la toma de decisiones.',
        image: 'assets/images/bg/bg2.jpg'
    },
    {
        title: 'Frontend',
        subtitle: '',
        subtext: 'Parte del desarrollo web que se centra en el diseño y la implementación de la interfaz de usuario (interacción con la app o sitio web).',
        image: 'assets/images/bg/bg3.jpg'
    },
    {
        title: 'Backend',
        subtitle: '',
        subtext: 'Parte del desarrollo web que se encarga del servidor, base de datos y la lógica de la aplicación. Gestión, proceso de datos y garantía de buen funcionamiento.',
        image: 'assets/images/bg/bg4.jpg'
    },

]
