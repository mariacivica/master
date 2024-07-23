export interface RoleCard {
  title: string,
  subtitle: string,
  subtext: string,
  icon: string, // Añadir esta propiedad
  route: string
}

export const roleCards: RoleCard[] = [
  {
      title: 'Data Architect',
      subtitle: '',
      subtext: 'Diseño y gestión de la arquitectura de datos, asegurando la integración y calidad de los datos.',
      icon: 'bi-diagram-3', // Icono para Data Architect
      route: 'data-architect'
  },
  {
      title: 'Frontend Developer',
      subtitle: '',
      subtext: 'Desarrollo de la interfaz de usuario de aplicaciones web, garantizando una experiencia de usuario fluida y atractiva.',
      icon: 'bi-display', // Icono para Frontend Developer
      route: 'frontend-developer'
  },
  {
      title: 'Data Engineer',
      subtitle: '',
      subtext: 'Construcción y mantenimiento de infraestructuras de datos escalables y eficientes.',
      icon: 'bi-cpu', // Icono para Data Engineer
      route: 'data-engineer'
  },
  {
      title: 'Project Management',
      subtitle: '',
      subtext: 'Planificación, ejecución y supervisión de proyectos, asegurando el cumplimiento de plazos y objetivos.',
      icon: 'bi-clipboard-data', // Icono para Project Management
      route: 'project-management'
  }
];
