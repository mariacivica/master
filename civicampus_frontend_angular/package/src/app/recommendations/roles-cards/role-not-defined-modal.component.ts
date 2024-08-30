import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-not-defined-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Rol No Definido</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="close()"></button>
    </div>
    <div class="modal-body">
      <p>Este rol aún está por definir</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="close()">Aceptar</button>
    </div>
  `,
  styles: [`
    .btn-primary {
      background-color: #FF5038;
      border-color: #FF5038;
    }
  `]
})
export class RoleNotDefinedModalComponent {
  constructor(public activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }
}
