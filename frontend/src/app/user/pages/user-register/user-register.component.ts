import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {TheUserRegisterComponent} from "../../components/the-user-register/the-user-register.component";
import {
  TheIllustratorProfileComponent
} from "../../components/the-illustrator-profile/the-illustrator-profile.component";

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheUserRegisterComponent,
    TheIllustratorProfileComponent
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

}
