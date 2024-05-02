import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookProfileComponent } from './the-book-profile.component';

describe('TheBookProfileComponent', () => {
  let component: TheBookProfileComponent;
  let fixture: ComponentFixture<TheBookProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
