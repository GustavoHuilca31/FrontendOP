import {Component, OnInit} from '@angular/core';
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDivider} from "@angular/material/divider";
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {UsersService} from "../../../shared/service/users.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-the-user-register',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIconButton,
    MatIconModule,
    MatCheckbox,
    FormsModule,
    MatButton,
    MatDivider,
    FaIconComponent,
    NgIf,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './the-user-register.component.html',
  styleUrl: './the-user-register.component.css'
})
export class TheUserRegisterComponent implements OnInit{
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]);
  confirm_password = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  artist = new FormControl(false);
  first_name = '';
  last_name = '';
  imgUrl = '';
  type = 'reader';


  hide = true;
  hideConfirm = true;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTwitter = faTwitter;

  constructor(private usersService: UsersService) { }// Inyecta el servicio UsersService para interactuar con la API.

  ngOnInit(): void {
  }

  // Método para registrar un nuevo usuario.
  register() {
    if (this.artist.value) {
      this.type = 'artist';
    }

    if (!this.email.valid || !this.password.valid || !this.confirm_password.valid || !this.username.valid) {
      return;
    }

    if (this.password.value !== this.confirm_password.value) {
      this.confirm_password.setErrors({ mismatch: true });
      return;
    }

    this.usersService.createUser({
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      firstName: this.first_name,
      lastName: this.last_name,
      imgUrl: this.imgUrl,
      type: this.type
    }).subscribe(
      response => console.log('Usuario registrado con éxito', response),
      error => console.error('Error al registrar el usuario', error)
    );
  }

}
