import { Component } from '@angular/core';
import { NavbarContentComponent } from '../../../public/components/navbar-content/navbar-content.component';
import { FooterContentComponent } from '../../../public/components/footer-content/footer-content.component';
import { TheArtistRoomComponent } from '../../components/the-artist-room/the-artist-room.component';

@Component({
  selector: 'artist-room',
  standalone: true,
  imports: [NavbarContentComponent,FooterContentComponent,TheArtistRoomComponent],
  templateUrl: './artist-room.component.html',
  styleUrl: './artist-room.component.css'
})
export class ArtistRoomComponent {
}

