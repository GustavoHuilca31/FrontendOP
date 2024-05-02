import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserEditAccountComponent } from './the-user-edit-account.component';

describe('TheUserEditAccountComponent', () => {
  let component: TheUserEditAccountComponent;
  let fixture: ComponentFixture<TheUserEditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserEditAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
