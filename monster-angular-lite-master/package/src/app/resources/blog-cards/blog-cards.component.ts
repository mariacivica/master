import { Component, OnInit } from '@angular/core';
import { BlogCard, blogCards } from './blog-cards-data';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogNotDefinedModalComponent } from './blog-not-defined-modal.component';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogCards: BlogCard[];

  constructor(private router: Router, private modalService: NgbModal) {
    this.blogCards = blogCards;
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
    this.modalService.open(BlogNotDefinedModalComponent);
  }
}
