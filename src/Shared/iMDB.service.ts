import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IShows } from '../Shared/iMDB';
import 'rxjs/add/operator/map';

@Injectable()
export class iMDBService {
  private iMDBURL:string= 'http://www.omdbapi.com/?i=tt1285016&apikey=d3908ab8';
  // CANT PARSE THE POSTERS
  // 'http://img.omdbapi.com/?i=tt1285016&apikey=d3908ab8'
  // Returning a json format movie
  // 'http://www.omdbapi.com/?i=tt1285016&apikey=d3908ab8';
  constructor(private http:HttpClient) { }

  getiMDB(): Observable<IShows[]> {
    return this.http.get<IShows[]>(this.iMDBURL)
    .do(data=>console.log('All: '+JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err:HttpErrorResponse)
  {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}