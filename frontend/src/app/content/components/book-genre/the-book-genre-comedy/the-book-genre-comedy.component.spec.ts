import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookGenreComedyComponent } from './the-book-genre-comedy.component';

describe('TheBookGenreComedyComponent', () => {
  let component: TheBookGenreComedyComponent;
  let fixture: ComponentFixture<TheBookGenreComedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookGenreComedyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookGenreComedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
