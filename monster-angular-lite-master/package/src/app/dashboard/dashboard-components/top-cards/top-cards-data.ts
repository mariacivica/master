export interface Topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  percentage: number
}

export const topcards: Topcard[] = [
  { bgcolor: 'success', icon: 'bi bi-code-slash', title: 'Lenguajes de Programación', subtitle: 'Lenguajes de Programación', percentage: 0 },
  { bgcolor: 'warning', icon: 'bi bi-display', title: 'Frameworks Front-End', subtitle: 'Frameworks Front-End', percentage: 20 },
  { bgcolor: 'danger', icon: 'bi bi-server', title: 'Frameworks Back-End', subtitle: 'Frameworks Back-End', percentage: 15 },
  { bgcolor: 'info', icon: 'bi bi-bar-chart', title: 'Herramientas BI', subtitle: 'Herramientas BI', percentage: 8 },
  { bgcolor: 'primary', icon: 'bi bi-tools', title: 'Herramientas Desarrollo /Devops', subtitle: 'Herramientas Desarrollo /Devops', percentage: 0 },
  { bgcolor: 'secondary', icon: 'bi bi-arrow-left-right', title: 'Herramientas Transformación Datos', subtitle: 'Herramientas Transformación Datos', percentage: 0 },
  { bgcolor: 'success', icon: 'bi bi-database', title: 'Plataformas de Datos', subtitle: 'Plataformas de Datos', percentage: 70 },
  { bgcolor: 'danger', icon: 'bi bi-hammer', title: 'Otras herramientas de Datos', subtitle: 'Otras herramientas de Datos', percentage: 0 },
  { bgcolor: 'warning', icon: 'bi bi-bar-chart-steps', title: 'Herramientas Data Science', subtitle: 'Herramientas Data Science', percentage: 5 },
  { bgcolor: 'info', icon: 'bi bi-shield-lock', title: 'Herramientas Gobierno', subtitle: 'Herramientas Gobierno', percentage: 0 },
  { bgcolor: 'primary', icon: 'bi bi-diagram-3', title: 'Arquitectura y Habilidades Core', subtitle: 'Arquitectura y Habilidades Core', percentage: 0 },
];
