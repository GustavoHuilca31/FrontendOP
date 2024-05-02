import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookDetailsEditTabviewComponent } from './the-book-details-edit-tabview.component';

describe('TheBookDetailsEditTabviewComponent', () => {
  let component: TheBookDetailsEditTabviewComponent;
  let fixture: ComponentFixture<TheBookDetailsEditTabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookDetailsEditTabviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookDetailsEditTabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
