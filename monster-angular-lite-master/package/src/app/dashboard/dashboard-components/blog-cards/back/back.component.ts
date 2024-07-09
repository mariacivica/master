import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
  standalone: true,
  imports: [NgbNavModule],
})
export class BackComponent {
  active = 1;
}
