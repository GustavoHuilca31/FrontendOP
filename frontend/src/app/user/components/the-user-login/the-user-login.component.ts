import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {TheUserLoginEmailComponent} from "../the-user-login-email/the-user-login-email.component";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-user-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgIf,
    TheUserLoginEmailComponent,
    MatIconModule,
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './the-user-login.component.html',
  styleUrl: './the-user-login.component.css'
})
export class TheUserLoginComponent{
  @Input() showLogin!: boolean;
  @Output() close = new EventEmitter<void>();
  @Input() showEmailLogin !: boolean;
  @Output() closeEmail = new EventEmitter<void>();

  constructor() {
  }

  closeLogin() {
    this.showLogin = false;
    this.close.emit();
  }

  closeEmailLogin() {
    this.showEmailLogin = false;
    this.closeEmail.emit();
  }

  backToLogin() {
    this.showEmailLogin = false;
    this.showLogin = true;
    this.closeEmail.emit();
  }

  openEmailLogin() {
    this.showEmailLogin = true;
    this.showLogin = false;
  }

  protected readonly faEnvelope = faEnvelope;
  protected readonly faFacebook = faFacebook;
  protected readonly faGoogle = faGoogle;
  protected readonly faTwitter = faTwitter;
}
