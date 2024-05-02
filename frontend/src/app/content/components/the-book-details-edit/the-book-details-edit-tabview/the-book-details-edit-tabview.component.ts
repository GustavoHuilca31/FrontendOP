import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEdit, faHeart, faPencil} from "@fortawesome/free-solid-svg-icons";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
@Component({
  selector: 'the-book-details-edit-tabview',
  standalone: true,
  imports: [MatTabsModule, MatFormField, MatInput, MatLabel, FormsModule, FaIconComponent],
  templateUrl: './the-book-details-edit-tabview.component.html',
  styleUrl: './the-book-details-edit-tabview.component.css'
})
export class TheBookDetailsEditTabviewComponent implements OnInit{
  bookData:any;
  value :any;
  description:any;
  bookChapters:any[] = [];
  editMode:boolean = false;
  protected readonly faHeart = faHeart;
  protected readonly faEdit = faEdit;
  protected readonly faPencil = faPencil;
  currentTitle: any;
  constructor( private bookService: BookService){}
  ngOnInit(): void {
     this.getBookDetails();
  }
  getBookDetails(){
    this.bookService.getAll().subscribe((data:any) => {
      data.forEach((book: any) => {
        if(book.type === 'book' && book.title === 'Boulevard'){
          this.bookData = new Book(book.title, book.description, book.date_publish, book.type, book.id, book.imgUrl, book.likes, book.views, book.revenue, book.genre);
          this.value = this.bookData.title;
          this.description = this.bookData.description;
          this.getChapters();
        }
      });
    });
  }
  getChapters(){
    this.bookService.getChapters().subscribe((data:any) => {
           data.forEach((chapter: any) => {
             if(String(chapter.book_id) === String(this.bookData.id)){
               this.bookChapters.push(chapter);
             }
           });
    });
  }
  setEditMode(){
    this.editMode = !this.editMode;
  }

  updateTitle(id:any,title: any){
    this.bookService.editChapter(id, title).subscribe((data:any) => {
          const chapterToUpdate = this.bookChapters.find((chapter:any) => chapter.id === id);
          if(chapterToUpdate){
            chapterToUpdate.title = title;
          }

    });
  }
  editTitle(id: any){
    this.updateTitle(id,this.currentTitle);
  }

}
