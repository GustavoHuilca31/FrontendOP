import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {GalleryModule, GalleryComponent, GalleryItem, ImageItem} from "ng-gallery";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronDown, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-main-page-banner',
  standalone: true,
  imports: [
    GalleryComponent,
    MatCardModule,
    MatButtonModule,
    NgForOf,
    FontAwesomeModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './the-main-page-banner.component.html',
  styleUrl: './the-main-page-banner.component.css'
})
export class TheMainPageBannerComponent implements OnInit{

  books: any[] = [];

  images: { url: string, alt: string }[] = [];

  bookData:any;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.books = [];
    this.bookService.getAll().subscribe((res:any) => {
      if (res){
        res.slice(0,8).forEach((book: any) => {
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
            this.images.push({url: book.imgUrl, alt: book.title});
          }
        });
      }

    });
  }

  currentImageIndex = 0;

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length; //% se usa para que no se pase del límite
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  protected readonly faChevronDown = faChevronDown;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
}
