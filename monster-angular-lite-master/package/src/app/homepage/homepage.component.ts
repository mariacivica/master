import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Welcome to the homepage!';
  }

  ngAfterViewInit() { }
}
