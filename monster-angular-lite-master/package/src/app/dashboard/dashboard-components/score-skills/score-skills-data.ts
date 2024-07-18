export interface Product {
  category: string;
  productName: string;
  difficulty: string;
  testScore: string;
  testDate: string;
}

export const ScoreSkills: Product[] = [
  {
    category: 'Frameworks Front-End',
    productName: 'Angular',
    difficulty: 'Media',
    testScore: '90/100',
    testDate: '2024-07-01'
  },
  {
    category: 'Frameworks Back-End',
    productName: 'ASP .NET Core',
    difficulty: 'Alta',
    testScore: '60/100',
    testDate: '2024-06-20'
  },
  {
    category: 'Herramientas BI',
    productName: 'MicroStrategy',
    difficulty: 'Baja',
    testScore: '100/100',
    testDate: '2024-07-05'
  },
  {
    category: 'Plataformas de Datos',
    productName: 'Snowflake',
    difficulty: 'Alta',
    testScore: '99/100',
    testDate: '2024-05-15'
  },
  {
    category: 'Plataformas de Datos',
    productName: 'BigQuery',
    difficulty: 'Alta',
    testScore: '89/100',
    testDate: '2024-04-10'
  },
  {
    category: 'Plataformas de Datos',
    productName: 'MySQL',
    difficulty: 'Media',
    testScore: '100/100',
    testDate: '2024-03-12'
  },
];
