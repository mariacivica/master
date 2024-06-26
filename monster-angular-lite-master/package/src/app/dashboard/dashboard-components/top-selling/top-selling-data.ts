export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'María González',
        gmail: 'maria.gonzalez@civica-soft.com',
        productName: 'Ingeniería de Datos',
        status: 'danger', // danger, warning, success, info dificultad (a más dificultad más arriba estará en la lista)
        weeks: 5,
        budget: '99/100'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'María González',
        gmail: 'maria.gonzalez@civica-soft.com',
        productName: 'Backend',
        status: 'info',
        weeks: 3,
        budget: '99/100'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'María González',
        gmail: 'maria.gonzalez@civica-soft.com',
        productName: 'Ingeniería de Datos	',
        status: 'warning',
        weeks: 2,
        budget: '90/100'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'María González',
        gmail: 'maria.gonzalez@civica-soft.com',
        productName: 'Análisis de Datos',
        status: 'success',
        weeks: 8,
        budget: '95/100'
    },

]
