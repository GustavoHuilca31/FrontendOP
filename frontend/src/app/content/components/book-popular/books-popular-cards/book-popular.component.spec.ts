import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPopularComponent } from './book-popular.component';

describe('BookPopularComponent', () => {
  let component: BookPopularComponent;
  let fixture: ComponentFixture<BookPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
