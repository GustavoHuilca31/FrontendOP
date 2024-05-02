import {Component, OnInit} from '@angular/core';
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-main-page-recent-book',
  standalone: true,
  imports: [
    MainPageCarouselsComponent,
    RouterLink
  ],
  templateUrl: './the-main-page-recent-book.component.html',
  styleUrl: './the-main-page-recent-book.component.css'
})
export class TheMainPageRecentBookComponent implements OnInit{
  imagesRecent: { url: string, alt: string }[] = [];

  bookData:any;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.getRecentBooks();
  }

  getRecentBooks() {
    this.bookService.getAll().subscribe((res: any) => {
      if (res){
        let copyRes = [...res];
        copyRes.sort((a: any, b: any) => new Date(b.date_publish).getTime() - new Date(a.date_publish).getTime()).slice(0, 8).forEach((book: any) => {
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
            this.imagesRecent.push({url: book.imgUrl, alt: book.title});
          }
        });
      }
    });
  }

}
