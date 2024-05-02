import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookDetailsEditCoverComponent } from './the-book-details-edit-cover.component';

describe('TheBookDetailsEditCoverComponent', () => {
  let component: TheBookDetailsEditCoverComponent;
  let fixture: ComponentFixture<TheBookDetailsEditCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookDetailsEditCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookDetailsEditCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
