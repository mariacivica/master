import { Component, OnInit } from '@angular/core';
import { RoleCard, roleCards } from './roles-cards-data';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleNotDefinedModalComponent } from './role-not-defined-modal.component';

@Component({
  selector: 'app-roles-cards',
  templateUrl: './roles-cards.component.html'
})
export class RolesCardsComponent implements OnInit {

  roleCards: RoleCard[];

  constructor(private router: Router, private modalService: NgbModal) {
    this.roleCards = roleCards;
  }

  ngOnInit(): void {
  }

  redirectToPage(route: string): void {
    if (route === '#') {
      this.openModal();
    } else {
      this.router.navigate([route]);
    }
  }

  openModal(): void {
    this.modalService.open(RoleNotDefinedModalComponent);
  }
}
