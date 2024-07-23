import { Component, OnInit } from '@angular/core';
import { RoleCard, roleCards } from './roles-cards-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-cards',
  templateUrl: './roles-cards.component.html'
})
export class RolesCardsComponent implements OnInit {

  roleCards: RoleCard[];
  selectedRole: RoleCard | null = null;

  constructor(private router: Router) {
    this.roleCards = roleCards;
  }

  ngOnInit(): void {
  }

  openModal(roleCard: RoleCard): void {
    this.selectedRole = roleCard;
    const modalElement = document.getElementById('roleModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  redirectToPage(route: string | undefined): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
