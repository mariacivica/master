export interface RoleCard {
  title: string,
  subtitle: string,
  subtext: string,
  icon: string,
  route: string
}

export const roleCards: RoleCard[] = [
  {
    title: 'Data Architect',
    subtitle: '',
    subtext: 'Diseño y gestión de la arquitectura de datos, asegurando la integración y calidad de los datos.',
    icon: 'bi-diagram-2',
    route: '#'
  },
  {
    title: 'Frontend Developer',
    subtitle: '',
    subtext: 'Desarrollo de la interfaz de usuario de aplicaciones web, garantizando una experiencia de usuario fluida y atractiva.',
    icon: 'bi-display',
    route: '#'
  },
  {
    title: 'Data Engineer',
    subtitle: '',
    subtext: 'Construcción y mantenimiento de infraestructuras de datos escalables y eficientes.',
    icon: 'bi-hdd-network',
    route: 'recommendations/data-engineer' // Asegúrate de que esta ruta coincida con la configurada en el módulo
  },
  {
    title: 'Project Manager',
    subtitle: '',
    subtext: 'Planificación, ejecución y supervisión de proyectos, asegurando el cumplimiento de plazos y objetivos.',
    icon: 'bi-clipboard-check',
    route: '#'
  }
];