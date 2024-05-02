import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsEditPageComponent } from './book-details-edit-page.component';

describe('BookDetailsEditPageComponent', () => {
  let component: BookDetailsEditPageComponent;
  let fixture: ComponentFixture<BookDetailsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
