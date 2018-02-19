import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class SpotifyService {
  artists: any[] = [];
  constructor(public http: HttpClient) {
    console.log('Hi');
  }

  getArtists() {
      const url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
      const token = 'BQCs-n1Sk5FOq0MVeO2uWsI4KG9QYv0IFCpBk-WyqK81ybuRbzCSJ7W98T-Gw0kjT5OSkQKeneUT4mWrf_I';
      const headers = new HttpHeaders({
        authorization: `Bearer ${token}`
      });
      return this.http.get(url, { headers });
  }

}
