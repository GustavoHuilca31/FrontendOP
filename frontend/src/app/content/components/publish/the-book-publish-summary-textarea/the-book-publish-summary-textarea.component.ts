import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-the-book-publish-summary-textarea',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './the-book-publish-summary-textarea.component.html',
  styleUrl: './the-book-publish-summary-textarea.component.css'
})
export class TheBookPublishSummaryTextareaComponent {

}
