import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  allTV:any[] = [];

  searchTVWord:string='';

  myDate = new Date();


  imgPath:string = 'https://image.tmdb.org/t/p/w500'

  constructor(public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','tv')

    this._MovieApiService.MovieAPI('trending', 'tv', 'week').subscribe(data => this.allTV = data.results )
  }


}
