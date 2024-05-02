import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {TheUserRegisterComponent} from "../../components/the-user-register/the-user-register.component";
import {TheWriterProfileComponent} from "../../components/the-writer-profile/the-writer-profile.component";

@Component({
  selector: 'app-writer-profile',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheUserRegisterComponent,
    TheWriterProfileComponent
  ],
  templateUrl: './writer-profile.component.html',
  styleUrl: './writer-profile.component.css'
})
export class WriterProfileComponent {

}
