import { Component, OnInit } from '@angular/core';

import { observable, BehaviorSubject } from 'rxjs'
import { ApiService } from '../api.service';
import { MovieApiService } from '../movie-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchWord:string='';
  searchTVWord:string='';
  myDate = new Date();

  nameUser: string='';

  upcomingContianer:any []=[];
  movieArrTrending:any []=[];
  TVArrTrending:any []=[];

  imgPath:string = 'https://image.tmdb.org/t/p/w500'

  constructor(public ApiService:ApiService , public _MovieApiService:MovieApiService) {
    this.nameUser = this.ApiService.tokenName.first_name;

    this._MovieApiService.MovieAPI().subscribe((d)=>{

      this.movieArrTrending =  d.results.slice(0,20)
      // console.log(this.movieArrTrending )
    })

    this._MovieApiService.MovieAPI('trending', 'tv', 'day').subscribe((d)=>{

      this.TVArrTrending =  d.results.slice(0,20)
      // console.log(this.TVArrTrending )
    })


    // this._MovieApiService.upcomingMovies().subscribe( d => this.upcomingContianer = d.results.slice(0,20); console.log(this.upcomingContianer));
        this._MovieApiService.upcomingMovies().subscribe( (d) =>{
          this.upcomingContianer = d.results.slice(0,20)
          // console.log(this.upcomingContianer)

        })
  }

  ngOnInit(): void {

    localStorage.setItem('currentPage','home')
  }


}
