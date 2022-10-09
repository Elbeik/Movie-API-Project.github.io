import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movieDetailsById:any='';
  // tvDetailsID:any='';

  // isActiveId:boolean= false;

  // tvDetails:any;
  filmData:any;

  imgPath:string = 'https://image.tmdb.org/t/p/w500';

  constructor(public _ActivatedRoute:ActivatedRoute, public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {


    this.movieDetailsById = this._ActivatedRoute.snapshot.paramMap.get('id')
    // this.tvDetailsID = this._ActivatedRoute.snapshot.paramMap.get('id')

    // if(this.tvDetailsID != null || this.movieDetailsById != null)
    // {
    //   this.isActiveId = true;
    // }
    // else
    // {
    //   this.isActiveId = false;
    // }



    this._MovieApiService.MovieAPIDeatilsPage(this.movieDetailsById).subscribe((data)=>{

      this.filmData = data;
      console.log(this.filmData)

    })





    // this._MovieAPIService.tvAPIPage(this.tvDetailsID).subscribe((data)=>{

    //   this.tvDetails = data;
    // })


  }

}
