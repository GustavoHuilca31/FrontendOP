import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  TheBookDetailsEditToolbarTitleComponent
} from "../the-book-details-edit-toolbar-title/the-book-details-edit-toolbar-title.component";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";
@Component({
  selector: 'the-book-details-edit-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, TheBookDetailsEditToolbarTitleComponent],
  templateUrl: './the-book-details-edit-toolbar.component.html',
  styleUrl: './the-book-details-edit-toolbar.component.css'
})
export class TheBookDetailsEditToolbarComponent {

  constructor(private router: Router) {
  }
  goBack(){
    this.router.navigateByUrl('/my-stories');
  }

}
