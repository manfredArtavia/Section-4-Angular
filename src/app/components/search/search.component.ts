import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  term: string = '';
  constructor(public _spotify: SpotifyService) {}

  searchArtists(term: string) {
    if (this.term.length > 0) {
      this._spotify.getArtists(this.term).subscribe(artists => {
        console.log(artists);
      });
    }
  }
}
