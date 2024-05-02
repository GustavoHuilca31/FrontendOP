import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheArtistRoomComponent } from './the-artist-room.component';

describe('TheArtistRoomComponent', () => {
  let component: TheArtistRoomComponent;
  let fixture: ComponentFixture<TheArtistRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheArtistRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheArtistRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
