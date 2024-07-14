import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analisis-datos',
  templateUrl: './analisis-datos.component.html',
  styleUrls: ['./analisis-datos.component.css'],
  standalone: true,
  imports: [NgbNavModule, CommonModule],
})
export class AnalisisDatosComponent {
  active = 1;

  analysisResources = [
    { name: 'MicroStrategy', description: 'Plataforma de análisis y movilidad empresarial.', resourceLink: '#' },
    { name: 'Power BI', description: 'Servicio de análisis de negocios de Microsoft.', resourceLink: '#' },
    { name: 'Qlik', description: 'Plataforma de análisis de datos y visualización.', resourceLink: '#' },
    { name: 'Looker', description: 'Herramienta de inteligencia empresarial y análisis de datos.', resourceLink: '#' },
    { name: 'Tableau', description: 'Plataforma de visualización y análisis de datos.', resourceLink: '#' },
    { name: 'Metabase', description: 'Herramienta de análisis y visualización de datos de código abierto.', resourceLink: '#' },
    { name: 'Apache Superset', description: 'Plataforma de visualización de datos y exploración de datos de código abierto.', resourceLink: '#' },
    { name: 'Domo', description: 'Plataforma de inteligencia empresarial y análisis de datos basada en la nube.', resourceLink: '#' },
    { name: 'Sisense', description: 'Plataforma de análisis e inteligencia empresarial.', resourceLink: '#' },
    { name: 'Pentaho', description: 'Suite de software de inteligencia empresarial.', resourceLink: '#' },
    { name: 'SAP BI', description: 'Soluciones de inteligencia empresarial de SAP.', resourceLink: '#' },
    { name: 'SAS BI', description: 'Plataforma de inteligencia empresarial de SAS.', resourceLink: '#' },
    { name: 'Oracle BI - OBI', description: 'Suite de herramientas de inteligencia empresarial de Oracle.', resourceLink: '#' },
    { name: 'IBM Cognos', description: 'Suite de herramientas de inteligencia empresarial y rendimiento.', resourceLink: '#' },
    { name: 'TIBCO Webfocus', description: 'Plataforma de inteligencia empresarial y analítica.', resourceLink: '#' },
    { name: 'TIBCO Spotfire', description: 'Plataforma de análisis de datos y visualización de TIBCO.', resourceLink: '#' },
  ];
}
