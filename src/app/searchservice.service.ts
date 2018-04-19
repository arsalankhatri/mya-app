import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


export class SearchItem {
  constructor(public name: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string) {

  }
}

@Injectable()
export class SearchserviceService {
  apiRoot = 'http://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;
  data:number;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
    this.data=0;
  }


  //PROMISE SEARCH
  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiUrl).toPromise()
        .then(
        res => {
          //this.results = res.json().results;
          this.results = res.json().results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        },
        msg => {
          reject();
        }
        );
    });
    return promise;
  }



  observablesearch(term: string): Observable<SearchItem[]>{
      const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      return this.http.get(apiUrl).map
      (res => {
        const results = res.json().results
        .map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
        return results;
      });


  }

  obfunction(){
  return new Observable((ob)=>{
    ob.next([3,5,7,8,9]);
    ob.complete();
    })
  }

  adddata(){
    this.data++;
  }







}
