import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-engineer-itinerary',
  templateUrl: './data-engineer-itinerary.component.html',
  styleUrls: ['./data-engineer-itinerary.component.scss']
})
export class DataEngineerItineraryComponent implements OnInit {

  technologies = [
    { name: 'SQL', category: 'Lenguajes de Programación', description: 'Lenguaje de consulta estructurada para bases de datos relacionales.' },
    { name: 'Python', category: 'Lenguajes de Programación', description: 'Lenguaje de programación versátil y popular en la ingeniería de datos.' },
    { name: 'Java', category: 'Lenguajes de Programación', description: 'Lenguaje de programación utilizado en sistemas de procesamiento de datos.' },
    { name: 'GitHub', category: 'Herramientas Desarrollo / DevOps', description: 'Control de versiones y colaboración en el código.' },
    { name: 'Docker', category: 'Herramientas Desarrollo / DevOps', description: 'Contenedorización de aplicaciones para asegurar consistencia entre entornos.' },
    { name: 'Kubernetes', category: 'Herramientas Desarrollo / DevOps', description: 'Orquestación de contenedores para despliegue y escalado automatizado.' },
    { name: 'Apache Kafka', category: 'Herramientas Transformación de Datos', description: 'Plataforma de transmisión de datos distribuida para el procesamiento de flujo.' },
    { name: 'Apache Spark', category: 'Herramientas Transformación de Datos', description: 'Motor de análisis de datos a gran escala.' },
    { name: 'Airflow', category: 'Herramientas Transformación de Datos', description: 'Orquestación de flujos de trabajo y tareas ETL.' },
    { name: 'DBT', category: 'Herramientas Transformación de Datos', description: 'Transformación de datos en el almacén de datos.' },
    { name: 'Snowflake', category: 'Plataformas de Datos', description: 'Almacén de datos en la nube.' },
    { name: 'BigQuery', category: 'Plataformas de Datos', description: 'Almacén de datos de Google.' },
    { name: 'Databricks', category: 'Plataformas de Datos', description: 'Plataforma unificada de análisis de datos.' },
    { name: 'Azure Data Lake Gen2', category: 'Plataformas de Datos', description: 'Solución de almacenamiento de datos en la nube.' },
    { name: 'AWS S3', category: 'Plataformas de Datos', description: 'Solución de almacenamiento de datos en la nube.' },
    { name: 'Tableau', category: 'Herramientas BI', description: 'Visualización de datos.' },
    { name: 'Power BI', category: 'Herramientas BI', description: 'Herramienta de análisis empresarial de Microsoft.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
