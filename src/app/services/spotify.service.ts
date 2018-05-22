import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artists: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQAG14XSCUpxNjDflOCnNjiVepxqeDuBgH40JVtKnjPiQrQFUhuwZevjILqSob_VXwTguQpMzxVPQ24g0DM';
  constructor(public http: HttpClient) {}

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({
      authorization: `Bearer ${this.token}`
    });
  }

  getArtists(term: string) {
      const url =  `${this.urlSpotify}search?query=${term}&type=artist&limit=20`
      const headers = this.getHeaders();
      return this.http.get(url, { headers }).map((response: any) => {
        this.artists = response.artists.items;
        return this.artists;
      });
  }

  getArtist(id: string) {
      const url =  `${this.urlSpotify}artists/${id}`
      const headers = this.getHeaders();
      return this.http.get(url, { headers });
  }

  getTop(id: string) {
    const url =  `${this.urlSpotify}artists/${id}/top-tracks?country=US`
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).map(response => response['tracks']);
  }

}
