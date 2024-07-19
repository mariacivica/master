// top-cards.component.ts
import { Component, OnInit } from '@angular/core';
import { Comunities, comunities } from './comunities-data';

@Component({
  selector: 'app-comunities',
  templateUrl: './comunities.component.html',
  styleUrls: ['./comunities.component.scss']
})
export class ComunitiesComponent implements OnInit {
  comunities: Comunities[];

  constructor() {
    this.comunities = comunities;
  }

  ngOnInit(): void {}
}
