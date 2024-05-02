import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustratorProfileEditComponent } from './ilustrator-profile-edit.component';

describe('IlustratorProfileEditComponent', () => {
  let component: IlustratorProfileEditComponent;
  let fixture: ComponentFixture<IlustratorProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlustratorProfileEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IlustratorProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
