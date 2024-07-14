import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingenieria-datos',
  templateUrl: './ingenieria-datos.component.html',
  styleUrls: ['./ingenieria-datos.component.css'],
  standalone: true,
  imports: [NgbNavModule, CommonModule],
})
export class IngenieriaDatosComponent {
  active = 1;

  platforms = [
    { name: 'Snowflake', description: 'Plataforma de almacenamiento y análisis en la nube.', resourceLink: '#' },
    { name: 'BigQuery', description: 'Almacén de datos de Google para big data.', resourceLink: '#' },
    { name: 'Databricks Delta Lake', description: 'Plataforma de análisis de big data.', resourceLink: '#' },
    { name: 'Teradata', description: 'Solución de almacenamiento y análisis en la nube.', resourceLink: '#' },
    { name: 'Exadata', description: 'Base de datos de Oracle para alto rendimiento.', resourceLink: '#' },
    { name: 'Netezza', description: 'Sistema de almacenamiento de alto rendimiento.', resourceLink: '#' },
    { name: 'SQL Server', description: 'Gestión de base de datos de Microsoft.', resourceLink: '#' },
    { name: 'Azure Synapse', description: 'Análisis ilimitado y almacenamiento de datos.', resourceLink: '#' },
    { name: 'Oracle DB', description: 'Base de datos relacional completa.', resourceLink: '#' },
    { name: 'MySQL', description: 'Gestión de base de datos de código abierto.', resourceLink: '#' },
    { name: 'MariaDB', description: 'Base de datos relacional de alto rendimiento.', resourceLink: '#' },
    { name: 'Postgres', description: 'Base de datos relacional avanzada.', resourceLink: '#' },
    { name: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos.', resourceLink: '#' },
    { name: 'DynamoDB', description: 'Base de datos rápida y flexible de valor-clave.', resourceLink: '#' },
    { name: 'Azure Data Lake Gen2', description: 'Almacenamiento de datos masivos optimizado.', resourceLink: '#' },
    { name: 'Azure Blob Storage', description: 'Almacenamiento de objetos en la nube.', resourceLink: '#' },
    { name: 'AWS S3', description: 'Almacenamiento de objetos escalable y seguro.', resourceLink: '#' },
    { name: 'Cloudera', description: 'Plataforma de análisis y gestión de datos en la nube.', resourceLink: '#' },
    { name: 'Dremio', description: 'Plataforma de consulta de datos rápida.', resourceLink: '#' },
    { name: 'Firebolt', description: 'Almacén de datos en la nube de alta velocidad.', resourceLink: '#' },
    { name: 'Vertica', description: 'Almacenamiento de datos en la nube escalable.', resourceLink: '#' },
    { name: 'Elastic Search', description: 'Motor de búsqueda y análisis distribuido.', resourceLink: '#' },
    { name: 'Solr', description: 'Plataforma de búsqueda de código abierto.', resourceLink: '#' },
    { name: 'Redis', description: 'Almacenamiento en memoria para bases de datos y caché.', resourceLink: '#' },
    { name: 'Splunk', description: 'Plataforma de análisis de datos generados por máquinas.', resourceLink: '#' }
  ];

}
