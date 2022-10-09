import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable , BehaviorSubject } from 'rxjs';

import jwtDecode   from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getCurrent:any;

  constructor(public _HttpClient:HttpClient , public _Router:Router ) {

    if( localStorage.getItem("userToken") != null)
    {
        this.storgeData();
        this.getCurrent = localStorage.getItem('currentPage')
        _Router.navigate([this.getCurrent])
    }


  }

  register(regData: object):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",regData)
  }

  loginUrl(logUrl: object):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",logUrl)
  }

  tokenDecode = new BehaviorSubject(null)
  tokenName: any = null;
  storgeData()
  {
    this.tokenDecode.next(jwtDecode(JSON.stringify( localStorage.getItem("userToken"))));

    this.tokenName = jwtDecode(JSON.stringify( localStorage.getItem("userToken")));
    console.log(this.tokenDecode)
  }
}
