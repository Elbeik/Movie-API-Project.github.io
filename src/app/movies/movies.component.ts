import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  myDate = new Date();

  searchWord:string='';

  pagesMovie:any[]=[];

  allMovies:any[]=[];

  pageNumber = new Array(10);

  currentPage:any=1;

  imgPath:string = 'https://image.tmdb.org/t/p/w300'

  constructor(public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {

    localStorage.setItem('currentPage','movies')

    this._MovieApiService.moviesPagesAPI(1).subscribe((data)=> {

      this.pagesMovie = data.results;

      console.log(this.pagesMovie);

    })

  }

  getPage(No:number = 1)
  {
    this._MovieApiService.moviesPagesAPI(No).subscribe( data => this.pagesMovie = data.results);

    this.currentPage = No;
  }
}
