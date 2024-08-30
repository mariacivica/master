import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule, NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor(private modalService: NgbModal, private router: Router) {}

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  };

  public languages: any[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us'
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es'
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr'
    },
    {
      language: 'German',
      code: 'de',
      icon: 'de'
    }
  ];

  ngAfterViewInit() {}

  openLogoutModal(): void {
    const modalRef: NgbModalRef = this.modalService.open(LogoutConfirmationModalContent);
    modalRef.result.then(
      (result) => {
        if (result === 'logout') {
          this.logout();
        }
      },
      (reason) => {
        // Modal dismissed
      }
    );
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    const successModalRef = this.modalService.open(LogoutSuccessModalContent);
    successModalRef.result.finally(() => {
      this.router.navigate(['/login']);
    });
  }
}

@Component({
  selector: 'app-logout-confirmation-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmar Cierre de Sesión</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="cancel()"></button>
    </div>
    <div class="modal-body">
      <p>¿Estás seguro de que deseas cerrar sesión?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary custom-secondary" (click)="cancel()">Cancelar</button>
      <button type="button" class="btn btn-primary custom-primary" (click)="confirmLogout()">Cerrar Sesión</button>
    </div>
  `
})
export class LogoutConfirmationModalContent {
  constructor(public activeModal: NgbActiveModal) {}

  confirmLogout() {
    this.activeModal.close('logout');
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }
}

@Component({
  selector: 'app-logout-success-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Cierre de Sesión Exitoso</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="close()"></button>
    </div>
    <div class="modal-body">
      <p>Has cerrado sesión correctamente. Vuelve pronto.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary custom-primary" (click)="close()">Aceptar</button>
    </div>
  `
})
export class LogoutSuccessModalContent {
  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
