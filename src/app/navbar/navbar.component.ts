import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideShow:boolean = false ;

  constructor(public _ApiService:ApiService , public _Router:Router) { }

  ngOnInit(): void {



    this._ApiService.tokenDecode.subscribe(()=> {

      if (this._ApiService.tokenDecode.getValue() == null)
      {
        this.hideShow = false;
      }
      else
      {
        this.hideShow = true;
      }
    })


  }
  logout()
    {
      localStorage.removeItem('userToken');
      this._Router.navigate(['login'])
      this._ApiService.tokenDecode.next(null);
    }

}
