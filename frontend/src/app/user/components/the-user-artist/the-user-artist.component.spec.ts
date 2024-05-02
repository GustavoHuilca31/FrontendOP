import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserArtistComponent } from './the-user-artist.component';

describe('TheUserArtistComponent', () => {
  let component: TheUserArtistComponent;
  let fixture: ComponentFixture<TheUserArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
