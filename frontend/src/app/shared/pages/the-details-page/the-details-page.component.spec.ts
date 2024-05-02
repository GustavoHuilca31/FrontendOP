import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDetailsPageComponent } from './the-details-page.component';

describe('TheDetailsPageComponent', () => {
  let component: TheDetailsPageComponent;
  let fixture: ComponentFixture<TheDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
