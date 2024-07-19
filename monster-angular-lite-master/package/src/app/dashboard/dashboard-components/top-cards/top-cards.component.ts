// top-cards.component.ts
import { Component, OnInit } from '@angular/core';
import { Topcard, topcards } from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements OnInit {
  topcards: Topcard[];

  constructor() {
    this.topcards = topcards;
  }

  ngOnInit(): void {}
}
