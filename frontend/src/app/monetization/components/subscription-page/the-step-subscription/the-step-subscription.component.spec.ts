import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStepSubscriptionComponent } from './the-step-subscription.component';

describe('TheStepSectionComponent', () => {
  let component: TheStepSubscriptionComponent;
  let fixture: ComponentFixture<TheStepSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStepSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheStepSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
