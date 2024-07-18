import { Component, OnInit } from '@angular/core';
import { Product, ScoreSkills } from './score-skills-data';

@Component({
  selector: 'app-top-selling',
  templateUrl: './score-skills.component.html'
})
export class TopSellingComponent implements OnInit {

  topSelling: Product[];

  constructor() {
    this.topSelling = ScoreSkills;
  }

  ngOnInit(): void {
  }

}
