import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
  standalone: true,
  imports: [NgbNavModule, CommonModule],
})
export class BackComponent {
  active = 1;
  modalMessage = '';

  backendResources = [
    { name: 'ASP .NET Core', description: 'Framework de Microsoft para aplicaciones web.', resourceLink: '#', status: 'Completado' },
    { name: 'Django', description: 'Framework de Python para desarrollo web.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Flask', description: 'Micro framework de Python para aplicaciones web.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Laravel', description: 'Framework de PHP para aplicaciones web.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'CakePHP', description: 'Framework rápido de PHP.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Symfony', description: 'Framework de PHP para aplicaciones web.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Ruby on Rails', description: 'Framework de Ruby para desarrollo web.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Play', description: 'Framework para aplicaciones web en Scala y Java.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Express.js', description: 'Framework minimalista para Node.js.', resourceLink: '#', status: 'Sin iniciar' }
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
