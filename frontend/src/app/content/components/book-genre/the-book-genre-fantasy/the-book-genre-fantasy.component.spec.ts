import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookGenreFantasyComponent } from './the-book-genre-fantasy.component';

describe('TheBookGenreFantasyComponent', () => {
  let component: TheBookGenreFantasyComponent;
  let fixture: ComponentFixture<TheBookGenreFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookGenreFantasyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookGenreFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
