import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-analisis-datos',
  templateUrl: './analisis-datos.component.html',
  styleUrls: ['./analisis-datos.component.css'],
  standalone: true,
  imports: [NgbNavModule],
})
export class AnalisisDatosComponent {
  active = 1;
}
