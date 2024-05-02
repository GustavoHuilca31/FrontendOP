import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-the-book-publish-title-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './the-book-publish-title-input.component.html',
  styleUrl: './the-book-publish-title-input.component.css'
})
export class TheBookPublishTitleInputComponent {

}
