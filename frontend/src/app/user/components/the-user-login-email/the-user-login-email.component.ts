import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {UsersService} from "../../../shared/service/users.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-user-login-email',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
    MatLabel,
    NgIf,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './the-user-login-email.component.html',
  styleUrl: './the-user-login-email.component.css'
})
export class TheUserLoginEmailComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hide = true;

  @Output() back = new EventEmitter<void>();
  @Input() showEmailLogin !: boolean;
  @Output() close = new EventEmitter<void>();

  constructor(private usersService: UsersService) { }


  login() {
    if (this.email.value === null || this.password.value === null) {
      console.error('Email and password must not be null');
      return;
    }
    if (this.email.invalid || this.password.invalid) {
      console.error('Email and password must be valid');
      return;
    }

    if (this.email.value === 'miriam_bonastre@gmail.com' && this.password.value === '123456') {
      this.usersService.loginUser({
        "_email": this.email.value,
       "_password": this.password.value,
        "_name": "Flor M. Salvador",
        "_username": "flor_salvador01",
        "_type": "writer",
        "_subscription_id": "1",
        "_imgUrl": "https://github.com/Open-Source-SW54-Group-3-ArtCollab/Frontend/blob/d048f86736011fa911c88e559fe396244bb8c426/frontend/src/assets/images/flor-profile.png?raw=true",
        "id": "d327",
      }).subscribe((user) => {

        console.log('User logged in', user);
      });
    }
  }


  closeLogin() {
    this.showEmailLogin = false;
    this.close.emit();
  }

  backToLogin() {
    this.showEmailLogin = false;
    this.back.emit();
  }


}
