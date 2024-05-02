import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {
    TheUserRecoverPasswordComponent
} from "../../components/the-user-recover-password/the-user-recover-password.component";

@Component({
  selector: 'app-user-recover-password',
  standalone: true,
    imports: [
        FooterContentComponent,
        NavbarContentComponent,
        TheUserRecoverPasswordComponent
    ],
  templateUrl: './user-recover-password.component.html',
  styleUrl: './user-recover-password.component.css'
})
export class UserRecoverPasswordComponent {

}
