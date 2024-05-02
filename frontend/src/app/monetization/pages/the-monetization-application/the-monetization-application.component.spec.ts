import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMonetizationApplicationComponent } from './the-monetization-application.component';

describe('TheMonetizationApplicationComponent', () => {
  let component: TheMonetizationApplicationComponent;
  let fixture: ComponentFixture<TheMonetizationApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMonetizationApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMonetizationApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
