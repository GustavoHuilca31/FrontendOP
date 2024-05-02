import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {TheBookDetailsComponent} from "../../../shared/components/the-book-details/the-book-details.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-book-detail-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    TheBookDetailsComponent,
    FooterContentComponent,
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

}
