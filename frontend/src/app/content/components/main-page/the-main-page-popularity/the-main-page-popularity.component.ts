import {Component, OnInit} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MainPageBookCardsComponent} from "../main-page-book-cards/main-page-book-cards.component";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {NgForOf} from "@angular/common";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";

@Component({
  selector: 'app-the-main-page-popularity',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MainPageBookCardsComponent,
    FontAwesomeModule,
    NgForOf
  ],
  templateUrl: './the-main-page-popularity.component.html',
  styleUrl: './the-main-page-popularity.component.css'
})
export class TheMainPagePopularityComponent implements OnInit{

  genres = [
    {name: 'Drama', id: 'drama'},
    {name: 'Fantasía', id: 'fantasía'},
  ];

  books: any[] = [];
  topBooks: any[] = [];
  bookData:any;
  currentGenre = 'drama';

  protected readonly faChevronDown = faChevronDown;


  onGenreChange(genre: any) {
    this.currentGenre = genre;
    this.getBooks();
  }

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.getBooks();
    this.getTopBooks();
  }

  getBooks() {
    this.books = [];
    this.bookService.getAll().subscribe((res:any) => {
      if (res){
        res.filter((book: any) => book.genre === this.currentGenre).slice(0, 3).forEach((book: any) => {
          if (book.type === 'book') {
            this.bookData = new Book(
              book.title,
              book.description,
              book.date_publish,
              book.type,
              book.id,
              book.imgUrl,
              book.likes,
              book.views,
              book.revenue,
              book.genre
            );
            this.books.push(this.bookData);
          }
        });
      }
    });
  }

  getTopBooks() {
    this.topBooks = [];
    this.bookService.getAll().subscribe((res:any) => {
      if (res){
        res.sort((a: any, b: any) => b.views - a.views).slice(0, 3).forEach((book: any) => {
          if (book.type === 'book') {
            this.bookData = new Book(
              book.title,
              book.description,
              book.date_publish,
              book.type,
              book.id,
              book.imgUrl,
              book.likes,
              book.views,
              book.revenue,
              book.genre
            );
            this.topBooks.push(this.bookData);
          }
        });
      }
    });
  }

}
