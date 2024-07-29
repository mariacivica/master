import { Component, OnInit } from '@angular/core';
import { RoleCard, roleCards } from './roles-cards-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-cards',
  templateUrl: './roles-cards.component.html'
})
export class RolesCardsComponent implements OnInit {

  roleCards: RoleCard[];

  constructor(private router: Router) {
    this.roleCards = roleCards;
  }

  ngOnInit(): void {
  }

  redirectToPage(route: string | undefined): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
