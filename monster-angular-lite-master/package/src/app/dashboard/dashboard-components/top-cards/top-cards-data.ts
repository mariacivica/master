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
        title: '70%',
        subtitle: 'Aprendizaje general anual'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '$80',
        subtitle: 'Supuesta ganancia anual'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '60%',
        subtitle: 'Aprendizaje individual anual'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '100%',
        subtitle: 'Objetivos semanales'
    },

]
