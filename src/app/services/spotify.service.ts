import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artists: any[] = [];
  constructor(public http: HttpClient) {}

  getArtists(term: string) {
      const url = `https://api.spotify.com/v1/search?query=${term}&type=artist&limit=20`;
      const token = 'BQB2mEEFdPy6LX5aNB3jWIjsRI-CqQ0Z_0Qqkv-KlrUY1RxiTG5gNtNDcc7GSiqZp1vI35c4BtDItGY8rhY';
      const headers = new HttpHeaders({
        authorization: `Bearer ${token}`
      });
      return this.http.get(url, { headers }).map((response: any) => {
        this.artists = response.artists.items;
        return this.artists;
      });
  }

}
