import { Component, OnInit } from '@angular/core';
import { BlogCard, blogCards } from './blog-cards-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogcards: BlogCard[];

  constructor(private router: Router) {
    this.blogcards = blogCards;
  }

  ngOnInit(): void {
  }

  redirectToPage(route: string): void {
    this.router.navigate([route]);
  }
}
