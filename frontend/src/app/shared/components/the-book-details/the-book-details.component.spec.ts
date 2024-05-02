import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookDetailsComponent } from './the-book-details.component';

describe('TheBookDetailsComponent', () => {
  let component: TheBookDetailsComponent;
  let fixture: ComponentFixture<TheBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
