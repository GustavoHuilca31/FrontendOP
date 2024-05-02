import { Component } from '@angular/core';
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-the-user-recover-password',
  standalone: true,
  imports: [
    MatInput,
    MatButton
  ],
  templateUrl: './the-user-recover-password.component.html',
  styleUrl: './the-user-recover-password.component.css'
})
export class TheUserRecoverPasswordComponent {

}
