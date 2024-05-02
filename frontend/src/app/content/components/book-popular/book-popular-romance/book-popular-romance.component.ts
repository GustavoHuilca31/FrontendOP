import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'book-popular-romance',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './book-popular-romance.component.html',
  styleUrl: './book-popular-romance.component.css'
})
export class BookPopularRomanceComponent implements OnInit {
  bookData: any;
  books: any[]=[];
  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAll().subscribe((data:any) => {
      data.forEach((template:any) => {
        if(template.type === 'book'){
          this.bookData = new Book(template.title, template.description,template.date_publish, template.type, template.id, template.imgUrl, template.likes, template.views, template.revenue, template.genre);
          this.books.push(this.bookData);
        }
      });
    });
  }

  protected readonly faHeart = faHeart;

  update(id:any){
    this.increase(id)
  }

  increase(id:any) {
    const bookToUpdate = this.books.find(book => book.id === id);
    if(bookToUpdate){
      this.bookService.increaseLike(id, bookToUpdate.likes + 1 ).subscribe((data:any) => {
        bookToUpdate.likes = data.likes;
      });
    }
  }
}
