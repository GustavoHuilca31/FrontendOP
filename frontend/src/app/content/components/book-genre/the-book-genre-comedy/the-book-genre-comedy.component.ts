import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {Book} from "../../../model/book.entity";
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-the-book-genre-comedy',
  standalone: true,
  imports: [
    NgForOf,
    FaIconComponent
  ],
  templateUrl: './the-book-genre-comedy.component.html',
  styleUrl: './the-book-genre-comedy.component.css'
})
export class TheBookGenreComedyComponent {

  protected readonly faHeart = faHeart;
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
          const bookData = new Book(template.title, template.description, template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views,template.revenue, template.genre);
          this.books.push(bookData);
        }
      });
    });
    this.books = this.books.slice(0,6);
  }

  protected readonly faEye = faEye;
}

