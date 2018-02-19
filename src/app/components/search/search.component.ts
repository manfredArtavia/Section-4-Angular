import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtists().subscribe(response => {
      console.log(response)
    });
  }
}
