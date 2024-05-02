import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRoomComponent } from './artist-room.component';

describe('TheArtistRoomComponent', () => {
  let component: ArtistRoomComponent;
  let fixture: ComponentFixture<ArtistRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
