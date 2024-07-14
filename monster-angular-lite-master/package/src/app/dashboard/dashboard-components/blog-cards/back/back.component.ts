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

  backendResources = [
    { name: 'ASP .NET Core', description: 'Framework de Microsoft para aplicaciones web.', resourceLink: '#' },
    { name: 'Django', description: 'Framework de Python para desarrollo web.', resourceLink: '#' },
    { name: 'Flask', description: 'Micro framework de Python para aplicaciones web.', resourceLink: '#' },
    { name: 'Laravel', description: 'Framework de PHP para aplicaciones web.', resourceLink: '#' },
    { name: 'CakePHP', description: 'Framework rápido de PHP.', resourceLink: '#' },
    { name: 'Symfony', description: 'Framework de PHP para aplicaciones web.', resourceLink: '#' },
    { name: 'Ruby on Rails', description: 'Framework de Ruby para desarrollo web.', resourceLink: '#' },
    { name: 'Play', description: 'Framework para aplicaciones web en Scala y Java.', resourceLink: '#' },
    { name: 'Express.js', description: 'Framework minimalista para Node.js.', resourceLink: '#' }
  ];
}
