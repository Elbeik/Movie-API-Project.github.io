import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieApiService } from '../movie-api.service';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  tvDetailsID:any='';
  tvDetails:any;

  imgPath:string = 'https://image.tmdb.org/t/p/w500';

  constructor(public _ActivatedRoute:ActivatedRoute, public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {

    this.tvDetailsID = this._ActivatedRoute.snapshot.paramMap.get('id')

    this._MovieApiService.tvAPIPage(this.tvDetailsID).subscribe((data)=>{

      this.tvDetails = data;

    })



  }

}
