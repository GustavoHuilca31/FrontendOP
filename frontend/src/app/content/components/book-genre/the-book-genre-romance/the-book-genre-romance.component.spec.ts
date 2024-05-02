import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookGenreRomanceComponent } from './the-book-genre-romance.component';

describe('TheBookGenreRomanceComponent', () => {
  let component: TheBookGenreRomanceComponent;
  let fixture: ComponentFixture<TheBookGenreRomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookGenreRomanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookGenreRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
