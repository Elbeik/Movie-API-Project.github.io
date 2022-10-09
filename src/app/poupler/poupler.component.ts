import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-poupler',
  templateUrl: './poupler.component.html',
  styleUrls: ['./poupler.component.scss']
})
export class PouplerComponent implements OnInit {

  myDate = new Date();

  searchTVWord:string='';

  test:string ='amin';
  allPopular:any[] = [];


  imgPath:string = 'https://image.tmdb.org/t/p/w500'

  constructor(public _MovieApiService:MovieApiService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','popluar')

    this._MovieApiService.popularMovie().subscribe( d => this.allPopular = d.results)
    console.log('popular',this._MovieApiService.popularMovie().subscribe( (d) =>  this.allPopular = d.results))

    // this.test.charAt(2)
    console.log(this.test.slice(0,3))

  }

}
