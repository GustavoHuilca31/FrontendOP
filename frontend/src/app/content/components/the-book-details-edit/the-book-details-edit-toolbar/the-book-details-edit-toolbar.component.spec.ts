import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookDetailsEditToolbarComponent } from './the-book-details-edit-toolbar.component';

describe('TheBookDetailsEditToolbarComponent', () => {
  let component: TheBookDetailsEditToolbarComponent;
  let fixture: ComponentFixture<TheBookDetailsEditToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookDetailsEditToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookDetailsEditToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
