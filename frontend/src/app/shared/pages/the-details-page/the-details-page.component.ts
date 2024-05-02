import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {TheBookDetailsComponent} from "../../components/the-book-details/the-book-details.component";

@Component({
  selector: 'the-details-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheBookDetailsComponent
  ],
  templateUrl: './the-details-page.component.html',
  styleUrl: './the-details-page.component.css'
})
export class TheDetailsPageComponent {

}
