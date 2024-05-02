import {Component, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-main-page-genres',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MainPageCarouselsComponent,
    RouterLink
  ],
  templateUrl: './the-main-page-genres.component.html',
  styleUrl: './the-main-page-genres.component.css'
})
export class TheMainPageGenresComponent implements OnInit{

  protected readonly faChevronRight = faChevronRight;
  imagesDrama: { url: string, alt: string }[] = [];
  imagesFantasy: { url: string, alt: string }[] = [];
  bookData:any;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getAll().subscribe((res:any) => {
      if (res){
        res.filter((book: any) => book.genre === 'drama').forEach((book: any) => {
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
            this.imagesDrama.push({url: book.imgUrl, alt: book.title});
          }
        });
        res.filter((book: any) => book.genre === 'fantasía').forEach((book: any) => {
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
            this.imagesFantasy.push({url: book.imgUrl, alt: book.title});
          }
        });
      }

    });
  }

}
