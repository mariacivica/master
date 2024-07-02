import { Component, OnInit } from '@angular/core';
import { blogcard, blogcards } from './blog-cards-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogcards: blogcard[];

  constructor(private router: Router) {
    this.blogcards = blogcards;
  }

  ngOnInit(): void {
  }

  redirectToPage(route: string): void {
    this.router.navigate([route]);
  }
}
