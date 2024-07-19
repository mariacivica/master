// top-cards-data.ts
export interface Topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  percentage: number
}

export const topcards: Topcard[] = [
  { bgcolor: 'success', icon: 'bi bi-wallet', title: 'Lenguajes de Programación', subtitle: 'Lenguajes de Programación', percentage: 0 },
  { bgcolor: 'warning', icon: 'bi bi-coin', title: 'Frameworks Front-End', subtitle: 'Frameworks Front-End', percentage: 20 },
  { bgcolor: 'danger', icon: 'bi bi-basket3', title: 'Frameworks Back-End', subtitle: 'Frameworks Back-End', percentage: 15 },
  { bgcolor: 'info', icon: 'bi bi-bag', title: 'Herramientas BI', subtitle: 'Herramientas BI', percentage: 8 },
  { bgcolor: 'primary', icon: 'bi bi-wrench', title: 'Herramientas Desarrollo /Devops', subtitle: 'Herramientas Desarrollo /Devops', percentage: 0 },
  { bgcolor: 'secondary', icon: 'bi bi-gear', title: 'Herramientas Transformación Datos', subtitle: 'Herramientas Transformación Datos', percentage: 0 },
  { bgcolor: 'success', icon: 'bi bi-database', title: 'Plataformas de Datos', subtitle: 'Plataformas de Datos', percentage: 70 },
  { bgcolor: 'danger', icon: 'bi bi-box', title: 'Otras herramientas de Datos', subtitle: 'Otras herramientas de Datos', percentage: 0 },
  { bgcolor: 'warning', icon: 'bi bi-brain', title: 'Herramientas Data Science', subtitle: 'Herramientas Data Science', percentage: 5 },
  { bgcolor: 'info', icon: 'bi bi-lock', title: 'Herramientas Gobierno', subtitle: 'Herramientas Gobierno', percentage: 0 },
  { bgcolor: 'primary', icon: 'bi bi-cpu', title: 'Arquitectura y Habilidades Core', subtitle: 'Arquitectura y Habilidades Core', percentage: 0 },
];
