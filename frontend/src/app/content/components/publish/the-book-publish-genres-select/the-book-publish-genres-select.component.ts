import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf} from "@angular/common";

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-the-book-publish-genres-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgForOf],
  templateUrl: './the-book-publish-genres-select.component.html',
  styleUrl: './the-book-publish-genres-select.component.css'
})
export class TheBookPublishGenresSelectComponent {
  genres: Genre[] = [
    {value: 'romance-0', viewValue: 'Romance'},
    {value: 'fantasy-1', viewValue: 'Fantasía'},
    {value: 'comedy-2', viewValue: 'Comedia'},
  ];
}
