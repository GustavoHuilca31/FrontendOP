import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainPageGenresComponent } from './the-main-page-genres.component';

describe('TheMainPageGenresComponent', () => {
  let component: TheMainPageGenresComponent;
  let fixture: ComponentFixture<TheMainPageGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMainPageGenresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMainPageGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
