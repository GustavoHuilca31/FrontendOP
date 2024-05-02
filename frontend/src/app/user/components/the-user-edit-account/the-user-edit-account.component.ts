import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {NgIf} from "@angular/common";

type ShowCancelKeys = 'username' | 'password' | 'email' | 'subscription' | 'artist';

@Component({
  selector: 'app-the-user-edit-account',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        NgIf
    ],
  templateUrl: './the-user-edit-account.component.html',
  styleUrl: './the-user-edit-account.component.css'
})
export class TheUserEditAccountComponent {
  showCancel: Record<ShowCancelKeys, boolean> = {
    username: false,
    password: false,
    email: false,
    subscription: false,
    artist: false
  };

    toggleCancel(field: ShowCancelKeys) {
      this.showCancel[field] = !this.showCancel[field];
    }
}
