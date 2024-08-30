import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h-bi',
  templateUrl: './h-bi.component.html',
  styleUrls: ['./h-bi.component.css'],
  standalone: true,
  imports: [NgbNavModule, CommonModule],
})
export class hBiComponent {
  active = 1;
  modalMessage = '';

  hBiResources = [
    { name: 'MicroStrategy', description: 'Plataforma de análisis y movilidad empresarial.', resourceLink: '#', status: 'Completado' },
    { name: 'Power BI', description: 'Servicio de análisis de negocios de Microsoft.', resourceLink: '#', status: 'En curso' },
    { name: 'Qlik', description: 'Plataforma de análisis de datos y visualización.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Looker', description: 'Herramienta de inteligencia empresarial y análisis de datos.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Tableau', description: 'Plataforma de visualización y análisis de datos.', resourceLink: '#', status: 'En curso' },
    { name: 'Metabase', description: 'Herramienta de análisis y visualización de datos de código abierto.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Apache Superset', description: 'Plataforma de visualización de datos y exploración de datos de código abierto.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Domo', description: 'Plataforma de inteligencia empresarial y análisis de datos basada en la nube.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Sisense', description: 'Plataforma de análisis e inteligencia empresarial.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Pentaho', description: 'Suite de software de inteligencia empresarial.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'SAP BI', description: 'Soluciones de inteligencia empresarial de SAP.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'SAS BI', description: 'Plataforma de inteligencia empresarial de SAS.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Oracle BI - OBI', description: 'Suite de herramientas de inteligencia empresarial de Oracle.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'IBM Cognos', description: 'Suite de herramientas de inteligencia empresarial y rendimiento.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'TIBCO Webfocus', description: 'Plataforma de inteligencia empresarial y analítica.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'TIBCO Spotfire', description: 'Plataforma de análisis de datos y visualización de TIBCO.', resourceLink: '#', status: 'Sin iniciar' },
  ];

  takeTest(resource: { name: string; status: string }): void {
    if (resource.status === 'Completado') {
      this.modalMessage = `El test de ${resource.name} ya ha sido superado, no se puede realizar de nuevo.`;
    } else {
      this.modalMessage = `Iniciar el test para ${resource.name}`;
    }
    const modalElement = document.getElementById('testModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  showResourceModal(event: Event, resource: { name: string }): void {
    event.preventDefault();
    const modalElement = document.getElementById('resourceModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
