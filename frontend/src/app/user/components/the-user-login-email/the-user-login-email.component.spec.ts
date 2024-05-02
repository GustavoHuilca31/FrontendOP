import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserLoginEmailComponent } from './the-user-login-email.component';

describe('TheUserLoginEmailComponent', () => {
  let component: TheUserLoginEmailComponent;
  let fixture: ComponentFixture<TheUserLoginEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserLoginEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserLoginEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
