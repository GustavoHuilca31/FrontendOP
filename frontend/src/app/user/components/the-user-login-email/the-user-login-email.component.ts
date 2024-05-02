import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {UsersService} from "../../../shared/service/users.service";

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
        email: this.email.value,
        password: this.password.value,
        name: "Flor M. Salvador",
        username: "flor_salvador01",
        type: "writer",
        subscription_id: "1",
        imgUrl: "../src/assets/images/flor-profile.png"

      }).subscribe((user) => {
        console.log(user);
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
