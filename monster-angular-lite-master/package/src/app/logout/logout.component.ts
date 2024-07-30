import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    // Limpiar cualquier dato del usuario almacenado en localStorage o sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
