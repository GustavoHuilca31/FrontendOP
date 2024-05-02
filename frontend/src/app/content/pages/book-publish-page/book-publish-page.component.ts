import { Component } from '@angular/core';
import {
  BookPublishStepperComponent
} from "../../components/publish/book-publish-stepper/book-publish-stepper.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";

@Component({
  selector: 'the-book-publish-page',
  standalone: true,
  imports: [
    BookPublishStepperComponent,
    FooterContentComponent,
    NavbarContentComponent
  ],
  templateUrl: './book-publish-page.component.html',
  styleUrl: './book-publish-page.component.css'
})
export class BookPublishPageComponent {

}
