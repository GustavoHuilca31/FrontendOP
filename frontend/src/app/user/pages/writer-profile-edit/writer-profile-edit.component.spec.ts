import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterProfileEditComponent } from './writer-profile-edit.component';

describe('WriterProfileEditComponent', () => {
  let component: WriterProfileEditComponent;
  let fixture: ComponentFixture<WriterProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterProfileEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriterProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
