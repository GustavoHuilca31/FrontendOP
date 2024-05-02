import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorProfileComponent } from './illustrator-profile.component';

describe('IllustratorProfileComponent', () => {
  let component: IllustratorProfileComponent;
  let fixture: ComponentFixture<IllustratorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IllustratorProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IllustratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
