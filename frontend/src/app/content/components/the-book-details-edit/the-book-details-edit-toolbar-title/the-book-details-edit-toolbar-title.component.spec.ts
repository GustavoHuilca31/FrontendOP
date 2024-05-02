import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookDetailsEditToolbarTitleComponent } from './the-book-details-edit-toolbar-title.component';

describe('TheBookDetailsEditToolbarTitleComponent', () => {
  let component: TheBookDetailsEditToolbarTitleComponent;
  let fixture: ComponentFixture<TheBookDetailsEditToolbarTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookDetailsEditToolbarTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookDetailsEditToolbarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
