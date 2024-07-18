import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  standalone: true,
  imports: [NgbNavModule, CommonModule],
})
export class FrontComponent {
  active = 1;

  frontendResources = [
    { name: 'Angular', description: 'Framework para aplicaciones web.', resourceLink: '#', status: 'Completado' },
    { name: 'Vue', description: 'Framework progresivo de JavaScript.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'React', description: 'Biblioteca para interfaces de usuario.', resourceLink: '#', status: 'En curso' },
    { name: 'jQuery', description: 'Biblioteca rápida y ligera.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Backbone', description: 'Framework para aplicaciones estructuradas.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Ember', description: 'Framework para aplicaciones web complejas.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Svelte', description: 'Framework para interfaces rápidas.', resourceLink: '#', status: 'Sin iniciar' }
  ];
}
