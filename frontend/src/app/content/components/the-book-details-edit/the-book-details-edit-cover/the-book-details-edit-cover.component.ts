import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";

@Component({
  selector: 'the-book-details-edit-cover',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './the-book-details-edit-cover.component.html',
  styleUrl: './the-book-details-edit-cover.component.css'
})
export class TheBookDetailsEditCoverComponent implements OnInit {
  bookData:any;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
     this.getBooks();
  }

  getBooks(){
     this.bookService.getAll().subscribe((data: any) => {
         data.forEach((book: any) => {
               if(book.type === 'book' && book.title === 'Boulevard'){
                 this.bookData = new Book(book.title, book.description, book.date_publish, book.type, book.id, book.imgUrl, book.likes, book.views, book.revenue, book.genre);
               }
         });
     });
  }
  editImage() {
    const newImageUrl = prompt('Por favor, ingresa la nueva URL de la imagen');
    if (newImageUrl) {
      this.bookData.imgUrl = newImageUrl;
    }
  }
}
