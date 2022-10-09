import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(public _HttpClient:HttpClient) { }

  MovieAPI(key:string = 'trending', key2:string = 'movie', key3:string = 'day'):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${key}/${key2}/${key3}?api_key=e8f438efd3a35a02603aa45eed6caf71`)
  }

  MovieAPIDeatilsPage(id:string)
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e8f438efd3a35a02603aa45eed6caf71`)
  }

  tvAPIPage(id:string)
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=e8f438efd3a35a02603aa45eed6caf71`)

  }

  moviesPagesAPI(pageNo:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=e8f438efd3a35a02603aa45eed6caf71&sort_by=popularity.desc&with_genres=28&page=${pageNo}`)
  }

  upcomingMovies():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e8f438efd3a35a02603aa45eed6caf71`)
  }

  popularMovie():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  }

}
