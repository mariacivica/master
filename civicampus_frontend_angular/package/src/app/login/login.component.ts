import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const emailInput = (event.target as HTMLFormElement).querySelector('#email') as HTMLInputElement;
    const passwordInput = (event.target as HTMLFormElement).querySelector('#password') as HTMLInputElement;
    const email = emailInput?.value;
    const password = passwordInput?.value;

    console.log('Email:', email);
    // Evitar loggear la contraseña en texto plano
    console.log('Password: ****'); // Mostrar un valor seguro en lugar de la contraseña

    // Construir manualmente el cuerpo de la solicitud
    const body = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    // Loggear el cuerpo de la solicitud sin mostrar la contraseña
    console.log('Body:', `email=${email}&password=****`);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Realizar la solicitud HTTP POST al backend
    this.http.post('http://localhost:8080/api/auth/login', body, { headers, responseType: 'text' })
      .subscribe(
        response => {
          console.log('Response:', response);
          if (response === 'Login exitoso') {
            localStorage.setItem('user', 'authenticated');
            this.router.navigate(['/home']);
          } else {
            this.modalService.open(InvalidCredentialsModalContent);
          }
        },
        error => {
          console.error('Error de autenticación', error);
          this.modalService.open(InvalidCredentialsModalContent);
        }
      );
  }
}

@Component({
  selector: 'app-invalid-credentials-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Error de Autenticación</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="close()"></button>
    </div>
    <div class="modal-body">
      <p>Credenciales inválidas</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary custom-primary" (click)="close()">Aceptar</button>
    </div>
  `,
  styles: [`
    .btn-primary {
      background-color: #FF5038;
      border-color: #FF5038;
    }
  `]
})
export class InvalidCredentialsModalContent {
  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
