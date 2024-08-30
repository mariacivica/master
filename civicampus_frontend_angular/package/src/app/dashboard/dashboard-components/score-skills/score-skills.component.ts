import { Component, OnInit } from '@angular/core';
import { Product, ScoreSkills } from './score-skills-data';

@Component({
  selector: 'app-score-skills',
  templateUrl: './score-skills.component.html'
})
export class ScoreSkillsComponent implements OnInit {

  scoreSkills: Product[];

  constructor() {
    this.scoreSkills = ScoreSkills;
  }

  ngOnInit(): void {
  }

}
