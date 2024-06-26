export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'Tienes 2 cursos pendientes.', //Dependiendo de los cursos que tenga pendientes el profesional el número cambiará
        time: 'Ahora'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'Web sobrecargada.',
        time: 'Hace 2 horas'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'Correo actualizado.',
        time: '24 Junio'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'Usuario registrado.',
        time: '21 Junio'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: 'Contraseña actualizada.',
        time: '21 Junio'
    },

]
