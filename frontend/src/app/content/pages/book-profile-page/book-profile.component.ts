import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {TheBookProfileComponent} from "../../components/the-book-profile/the-book-profile.component";

@Component({
  selector: 'the-book-profile-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheBookProfileComponent
  ],
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css'
})
export class BookProfileComponent {

}
