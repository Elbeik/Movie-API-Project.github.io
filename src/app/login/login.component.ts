import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login : FormGroup = new FormGroup({

    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{3,15}$/)])

  })

  constructor(public _ApiService:ApiService , public _Router:Router) { }

  ngOnInit(): void {
  }

  logError:string = '';

  logData(log: FormGroup)
  {
    this._ApiService.loginUrl(log.value).subscribe((lo)=> {

      if(lo.message == 'success')
      {
        localStorage.setItem("userToken", JSON.stringify(lo.token))

        this._ApiService.storgeData();

        this._Router.navigate(['home'])
      }
      else
      {
        this.logError = lo.message
      }
    })
  }

}
