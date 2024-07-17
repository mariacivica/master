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
    { name: 'Snowflake', description: 'Plataforma de almacenamiento y análisis en la nube.', resourceLink: '#', status: 'Completado' },
    { name: 'BigQuery', description: 'Almacén de datos de Google para big data.', resourceLink: '#', status: 'Completado' },
    { name: 'Databricks Delta Lake', description: 'Plataforma de análisis de big data.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Teradata', description: 'Solución de almacenamiento y análisis en la nube.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Exadata', description: 'Base de datos de Oracle para alto rendimiento.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Netezza', description: 'Sistema de almacenamiento de alto rendimiento.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'SQL Server', description: 'Gestión de base de datos de Microsoft.', resourceLink: '#', status: 'En curso' },
    { name: 'Azure Synapse', description: 'Análisis ilimitado y almacenamiento de datos.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Oracle DB', description: 'Base de datos relacional completa.', resourceLink: '#', status: 'En curso' },
    { name: 'MySQL', description: 'Gestión de base de datos de código abierto.', resourceLink: '#', status: 'Completado' },
    { name: 'MariaDB', description: 'Base de datos relacional de alto rendimiento.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Postgres', description: 'Base de datos relacional avanzada.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'DynamoDB', description: 'Base de datos rápida y flexible de valor-clave.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Azure Data Lake Gen2', description: 'Almacenamiento de datos masivos optimizado.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Azure Blob Storage', description: 'Almacenamiento de objetos en la nube.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'AWS S3', description: 'Almacenamiento de objetos escalable y seguro.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Cloudera', description: 'Plataforma de análisis y gestión de datos en la nube.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Dremio', description: 'Plataforma de consulta de datos rápida.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Firebolt', description: 'Almacén de datos en la nube de alta velocidad.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Vertica', description: 'Almacenamiento de datos en la nube escalable.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Elastic Search', description: 'Motor de búsqueda y análisis distribuido.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Solr', description: 'Plataforma de búsqueda de código abierto.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Redis', description: 'Almacenamiento en memoria para bases de datos y caché.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Splunk', description: 'Plataforma de análisis de datos generados por máquinas.', resourceLink: '#', status: 'Sin iniciar' }
  ];
}
