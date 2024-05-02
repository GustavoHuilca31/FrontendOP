import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'the-book-publish-thumbnail',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './the-book-publish-thumbnail.component.html',
  styleUrl: './the-book-publish-thumbnail.component.css'
})
export class TheBookPublishThumbnailComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  onIconClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Por favor, sube solo imágenes.');
        return;
      }
    }
  }
}
