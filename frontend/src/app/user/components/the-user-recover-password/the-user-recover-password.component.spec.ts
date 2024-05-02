import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserRecoverPasswordComponent } from './the-user-recover-password.component';

describe('TheUserRecoverPasswordComponent', () => {
  let component: TheUserRecoverPasswordComponent;
  let fixture: ComponentFixture<TheUserRecoverPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserRecoverPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
