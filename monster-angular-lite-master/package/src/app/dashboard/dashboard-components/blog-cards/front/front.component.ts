import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  standalone: true,
  imports: [NgbNavModule],
})
export class FrontComponent {
  active = 1;
}
