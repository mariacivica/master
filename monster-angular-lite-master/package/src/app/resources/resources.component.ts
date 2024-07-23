import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './resources.component.html'
})
export class ResourcesComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Welcome to the resources page!';
  }

  ngAfterViewInit() { }
}
