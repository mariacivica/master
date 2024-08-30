// top-cards.component.ts
import { Component, OnInit } from '@angular/core';
import { Comunities, comunities } from './comunities-details-data';

@Component({
  selector: 'app-comunities',
  templateUrl: './comunities-details.component.html',
  styleUrls: ['./comunities-details.component.scss']
})
export class ComunitiesComponent implements OnInit {
  comunities: Comunities[];

  constructor() {
    this.comunities = comunities;
  }

  ngOnInit(): void {}
}
