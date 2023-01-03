import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { UserInfo } from '../model/UserInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  details = this.fb.group({
      fullName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(6),Validators.maxLength(32)]],
      userName: ['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(2)]],
      emailId: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.pattern('^[0-9a-zA-Z]+$'),Validators.minLength(6),Validators.maxLength(12)]],
      gender: [Validators.required],
      dateOfBirth: [Validators.required],
      phoneNumber: [null,[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]],
      skill: [Validators.required]
  })
    hide:boolean=true;
    Roles: any = ['Admin', 'Author', 'Reader'];
    constructor(private fb:FormBuilder,private service:ServiceService,private router:Router) { }
    ngOnInit() {
      
    }
    onSubmit()
    {
      this.service.postData(this.details.value)
    .subscribe(response => { alert("You are registered!");
    this.details.reset();
    this.router.navigate(["login"])
  })}
    
  
}
