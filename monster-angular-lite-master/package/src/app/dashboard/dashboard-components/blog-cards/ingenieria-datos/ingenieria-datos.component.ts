import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ingenieria-datos',
  templateUrl: './ingenieria-datos.component.html',
  styleUrls: ['./ingenieria-datos.component.css'],
  standalone: true,
  imports: [NgbNavModule],
})
export class IngenieriaDatosComponent {
  active = 1;
}
