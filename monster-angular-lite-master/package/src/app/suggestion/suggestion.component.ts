import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Welcome to the suggestion page!';
  }

  ngAfterViewInit() { }
}
