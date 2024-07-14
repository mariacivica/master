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
    { name: 'Angular', description: 'Framework para aplicaciones web.', resourceLink: '#' },
    { name: 'Vue', description: 'Framework progresivo de JavaScript.', resourceLink: '#' },
    { name: 'React', description: 'Biblioteca para interfaces de usuario.', resourceLink: '#' },
    { name: 'jQuery', description: 'Biblioteca rápida y ligera.', resourceLink: '#' },
    { name: 'Backbone', description: 'Framework para aplicaciones estructuradas.', resourceLink: '#' },
    { name: 'Ember', description: 'Framework para aplicaciones web complejas.', resourceLink: '#' },
    { name: 'Svelte', description: 'Framework para interfaces rápidas.', resourceLink: '#' }
  ];
}
