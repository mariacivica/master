import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html'
})
export class RecommendationsComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Welcome to the recommendations page!';
  }

  ngAfterViewInit() { }
}
