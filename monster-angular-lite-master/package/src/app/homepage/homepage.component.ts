import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  subtitle: string;

  constructor(private router: Router) { // Inyectar el Router
    this.subtitle = 'Welcome to the homepage!';
  }

  ngAfterViewInit() { }

  navigateTo(path: string) { // Método para navegar a diferentes rutas
    this.router.navigate([`/${path}`]);
  }
}
