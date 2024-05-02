import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSubscriptionApplicationComponent } from './the-subscription-application.component';

describe('TheSubscriptionApplicationComponent', () => {
  let component: TheSubscriptionApplicationComponent;
  let fixture: ComponentFixture<TheSubscriptionApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSubscriptionApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheSubscriptionApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
