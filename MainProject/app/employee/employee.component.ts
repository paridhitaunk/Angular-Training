import { Component } from '@angular/core';
import { employee } from '../Model/employee';
import {NgForm } from '@angular/forms';
import { ServiceService } from '../shared/service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  form = {
    firstName: '',
    lastName: '',
    emailId: '',
    empId: '',
    phoneNumber: '',
    acceptTerms: false,
  };
  constructor(public service:ServiceService){ }
  obj:employee = new employee();
  isEdit:boolean = false;     

  ngOnInit()
  {
       this.service.s.subscribe(data => {
        this.service.getById(data).subscribe(
          {
            next:(employee)=>
            {
              this.isEdit=true;
              this.obj=employee
            }
          }
        )

    });
   
  }

  onSubmit(emp:employee)
  {
  this.service.postData(emp)
    .subscribe(response => {
        console.log(response)
  })
  }

  onEdit(emp:employee)
  {
    this.service.updateData(emp).subscribe();
  }
  onReset()
  {
      this.obj.firstName='';
      this.obj.lastName='';
      this.obj.emailId="";
      this.obj.phoneNumber=0;
      this.obj.gender='';
  }

  bclick(emp:employee)
  {
    if(this.isEdit)
    {
      this.onEdit(emp);
    }
    else
    {
      this.onSubmit(emp);
    }
  }
}
