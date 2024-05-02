import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainPagePopularArtistComponent } from './the-main-page-popular-artist.component';

describe('TheMainPagePopularArtistComponent', () => {
  let component: TheMainPagePopularArtistComponent;
  let fixture: ComponentFixture<TheMainPagePopularArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMainPagePopularArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMainPagePopularArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
