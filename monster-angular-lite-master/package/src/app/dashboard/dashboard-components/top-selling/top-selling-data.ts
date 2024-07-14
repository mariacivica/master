export interface Product {
  category: string;
  productName: string;
  difficulty: string;
  testScore: string;
}

export const TopSelling: Product[] = [
  {
    category: 'Plataformas de Datos',
    productName: 'Snowflake',
    difficulty: 'Alta',
    testScore: '99/100',
  },
  {
    category: 'Plataformas de Datos',
    productName: 'BigQuery',
    difficulty: 'Alta',
    testScore: '89/100',
  },
  {
    category: 'Frameworks Back-End',
    productName: 'ASP .NET Core',
    difficulty: 'Alta',
    testScore: '80/100',
  },
  {
    category: 'Herramientas BI',
    productName: 'Power BI',
    difficulty: 'Baja',
    testScore: '100/100',
  },
  {
    category: 'Frameworks Front-End',
    productName: 'Angular',
    difficulty: 'Media',
    testScore: '90/100',
  },
];
