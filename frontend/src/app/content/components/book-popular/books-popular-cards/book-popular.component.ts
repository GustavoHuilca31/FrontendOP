import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book.entity";
import {BookService} from "../../../service/book.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'book-popular',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './book-popular.component.html',
  styleUrl: './book-popular.component.css'
})
export class BookPopularComponent implements OnInit{

  books: any[] = [];
  bookData: any= null;
  bookPopular: Book = new Book('','','','book',0,'',0,0,0,'');
  ngOnInit(): void {
    this.getBooks();
  }

  constructor(private bookService: BookService) {}

  getBooks(){
    this.bookService.getAll().subscribe((data:any) => {
      data.forEach((template:any) => {
        if(template.type === 'book'){
          this.bookData = new Book(template.title, template.description,template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue, template.genre);
          this.books.push(this.bookData);
          if(this.bookData.views > this.bookPopular.views){
            this.bookPopular = this.bookData;
          }
        }
      });
    });
    this.books = this.books.filter(book => book.id !== this.bookPopular.id);
    let randomIndex = Math.floor(Math.random() * this.books.length);
    this.books = this.books.slice(randomIndex, randomIndex + 5);
  }

}
