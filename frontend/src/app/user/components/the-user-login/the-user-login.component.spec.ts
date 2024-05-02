import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserLoginComponent } from './the-user-login.component';

describe('TheUserLoginComponent', () => {
  let component: TheUserLoginComponent;
  let fixture: ComponentFixture<TheUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
