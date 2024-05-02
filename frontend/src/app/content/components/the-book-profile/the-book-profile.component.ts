import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-book-profile',
  standalone: true,
  imports: [MatCardModule,
    FontAwesomeModule, NgOptimizedImage, NgForOf, RouterLink],
  templateUrl: './the-book-profile.component.html',
  styleUrl: './the-book-profile.component.css'
})
export class TheBookProfileComponent {
  faArrowRight = faArrowRight;
  faEye = faEye;
  faLock = faLock;
  faHeart = faHeart;

  books:Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAll().subscribe((data: any) => {
      data.forEach((template: any) => {
        if (template.type === 'book') {
          const bookData = new Book(template.title, template.description, template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue, template.genre);
          this.books.push(bookData);
        }
      });
    });
    this.books = this.books.slice(0,1);
  }

  getChapters(): number[] {
    const chapterNumbers: number[] = [];
    for (let i = 1; i <= 1; i++) {
      chapterNumbers.push(i);
    }
    return chapterNumbers;
  }

}
