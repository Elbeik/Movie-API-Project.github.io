import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emialExisting:string = '';

  register : FormGroup = new FormGroup({

    first_name : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    last_name : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{3,15}$/)]),
    age : new FormControl(null, [Validators.required, Validators.min(15), Validators.max(60)]),

  })

  constructor(public _ApiService:ApiService, public _Router:Router) { }

  ngOnInit(): void {
  }

  registerData(reg : FormGroup){
    //send to ---> backend ---> API ---> service
    this._ApiService.register(reg.value).subscribe((reData)=>{
      if(reData.message == "success")
      {
        this._Router.navigate(['login']);
      }
      else
      {
        this.emialExisting = reData.errors.email.message;

      }
    })

  }

}
