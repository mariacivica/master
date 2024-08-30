import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  subtitle: string;

  constructor(private router: Router) {
    this.subtitle = 'Welcome to the home!';
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewInit() { }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
