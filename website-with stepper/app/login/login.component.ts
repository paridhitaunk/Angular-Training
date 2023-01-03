import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform  = this.fb.group({
    username: [''],
    password: ['',Validators.required]
  })
  hide = true;
  constructor(private fb:FormBuilder,private service:ServiceService,private router:Router){}

  onLogin()
  {
    this.service.get(this.loginform.value).subscribe(response=>{
      const user = response.find((a:any)=>{
        return a.userName === this.loginform.value.username && a.password === this.loginform.value.password
      });
      if(user)
      {
        alert("You are logged in!");
        this.router.navigate(["dashboard"])
      }
      else{
        alert("user not found");
        this.loginform.reset();
      }
    })
  }
}
