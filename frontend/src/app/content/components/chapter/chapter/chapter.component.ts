import {AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-chapter',
  standalone: true,
    imports: [
        FaIconComponent,
        MatButton,
        MatIcon,
        MatIconButton,
        MatInput,
        MatTab,
        MatTabGroup,
        MatToolbar
    ],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('slider', { static: true }) slider!: ElementRef;
  @ViewChildren('btn', { read: ElementRef }) buttons!: QueryList<ElementRef>;
  slides = 0;
  currentPosition = 0;
  currentMargin = 0;
  slidesPerPage = 0;
  slidesCount = 0;
  containerWidth = 0;
  isFirstSlide = false;
  isLastSlide = false;

  ngAfterViewInit() {
    if (this.container && this.container.nativeElement) {
      this.containerWidth = this.container.nativeElement.offsetWidth;
      this.setParams(this.containerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.container && this.container.nativeElement) {
      this.containerWidth = this.container.nativeElement.offsetWidth;
      this.setParams(this.containerWidth);
    }
  }

  setParams(w: number) {
    if (w < 551) {
      this.slidesPerPage = 1;
    } else if (w < 901) {
      this.slidesPerPage = 2;
    } else if (w < 1101) {
      this.slidesPerPage = 3;
    } else {
      this.slidesPerPage = 4;
    }
    this.slidesCount = this.slides - this.slidesPerPage;
    if (this.currentPosition > this.slidesCount) {
      this.currentPosition -= this.slidesPerPage;
    }
    this.currentMargin = - this.currentPosition * (100 / this.slidesPerPage);
    this.slider.nativeElement.style.marginLeft = this.currentMargin + '%';
  }

  slideRight() {
    if (this.currentPosition != 0) {
      this.currentMargin += (100 / this.slidesPerPage);
      this.slider.nativeElement.style.marginLeft = this.currentMargin + '%';
      this.currentPosition--;
    }
    this.isFirstSlide = this.currentPosition === 0;
    this.isLastSlide = this.currentPosition >= this.slidesCount;
  }

  slideLeft() {
    if (this.currentPosition != this.slidesCount) {
      this.currentMargin -= (100 / this.slidesPerPage);
      this.slider.nativeElement.style.marginLeft = this.currentMargin + '%';
      this.currentPosition++;
    }
    this.isFirstSlide = this.currentPosition === 0;
    this.isLastSlide = this.currentPosition >= this.slidesCount;
  }
}

