import { Component } from '@angular/core';
import {
  TheWriterProfileEditComponent
} from "../../components/the-writer-profile-edit/the-writer-profile-edit.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-writer-profile-edit',
  standalone: true,
  imports: [
    TheWriterProfileEditComponent,
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './writer-profile-edit.component.html',
  styleUrl: './writer-profile-edit.component.css'
})
export class WriterProfileEditComponent {

}
