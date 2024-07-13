export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: '70/100',
        subtitle: 'Ingeniería de Datos'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '80/100',
        subtitle: 'Análisis de Datos'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '60/100',
        subtitle: 'Frontend'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '100/100',
        subtitle: 'Backend'
    },

]
