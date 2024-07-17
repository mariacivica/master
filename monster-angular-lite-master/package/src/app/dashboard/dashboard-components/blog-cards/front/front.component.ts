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
    { name: 'Vue', description: 'Framework progresivo de JavaScript.', resourceLink: '#', status: 'En curso' },
    { name: 'React', description: 'Biblioteca para interfaces de usuario.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'jQuery', description: 'Biblioteca rápida y ligera.', resourceLink: '#', status: 'Completado' },
    { name: 'Backbone', description: 'Framework para aplicaciones estructuradas.', resourceLink: '#', status: 'En curso' },
    { name: 'Ember', description: 'Framework para aplicaciones web complejas.', resourceLink: '#', status: 'Sin iniciar' },
    { name: 'Svelte', description: 'Framework para interfaces rápidas.', resourceLink: '#', status: 'Completado' }
  ];
}
