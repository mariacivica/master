export interface topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  percentage: number // Añadir campo para porcentaje
}

export const topcards: topcard[] = [
  {
      bgcolor: 'success',
      icon: 'bi bi-wallet',
      title: 'Lenguajes de Programación',
      subtitle: 'Lenguajes de Programación',
      percentage: 70
  },
  {
      bgcolor: 'warning',
      icon: 'bi bi-coin',
      title: 'Frameworks Front-End',
      subtitle: 'Frameworks Front-End',
      percentage: 20
  },
  {
      bgcolor: 'danger',
      icon: 'bi bi-basket3',
      title: 'Frameworks Back-End',
      subtitle: 'Frameworks Back-End',
      percentage: 15
  },
  {
      bgcolor: 'info',
      icon: 'bi bi-bag',
      title: 'Herramientas BI',
      subtitle: 'Herramientas BI',
      percentage: 8
  },
  {
      bgcolor: 'primary',
      icon: 'bi bi-wrench',
      title: 'Herramientas Desarrollo /Devops',
      subtitle: 'Herramientas Desarrollo /Devops',
      percentage: 50
  },
  {
      bgcolor: 'secondary',
      icon: 'bi bi-gear',
      title: 'Herramientas Transformación Datos',
      subtitle: 'Herramientas Transformación Datos',
      percentage: 50
  },
  {
      bgcolor: 'success',
      icon: 'bi bi-database',
      title: 'Plataformas de Datos',
      subtitle: 'Plataformas de Datos',
      percentage: 70
  },
  {
      bgcolor: 'danger',
      icon: 'bi bi-box',
      title: 'Otras herramientas de Datos',
      subtitle: 'Otras herramientas de Datos',
      percentage: 60
  },
  {
      bgcolor: 'warning',
      icon: 'bi bi-brain',
      title: 'Herramientas Data Science',
      subtitle: 'Herramientas Data Science',
      percentage: 75
  },
  {
      bgcolor: 'info',
      icon: 'bi bi-lock',
      title: 'Herramientas Gobierno',
      subtitle: 'Herramientas Gobierno',
      percentage: 80
  },
  {
      bgcolor: 'primary',
      icon: 'bi bi-cpu',
      title: 'Arquitectura y Habilidades Core',
      subtitle: 'Arquitectura y Habilidades Core',
      percentage: 85
  },
];
