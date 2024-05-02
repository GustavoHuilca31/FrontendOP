import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserRegisterComponent } from './the-user-register.component';

describe('TheUserRegisterComponent', () => {
  let component: TheUserRegisterComponent;
  let fixture: ComponentFixture<TheUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
