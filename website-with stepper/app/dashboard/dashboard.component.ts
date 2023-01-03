import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Stepper } from '../model/Steppermodel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isClicked=false;
  formGroup!: FormGroup;
  data:Stepper = new Stepper();
  firstFormGroup = this.fb.group({
   fullName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
   emailId: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   fathersName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
   mothersName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
   gender: ['',[Validators.required]],
   phoneNumber: ['',[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]],
   skill: ['',[Validators.required]],
   dateOfBirth: ['',[Validators.required]]

  });
  secondFormGroup = this.fb.group({
    fullName: [''],
    accNo: ['',[Validators.pattern('[0-9]')]],
    bankName: [''],
    IFSCcode: [''],
    netBanking: [''],
    mobBanking: ['']
    
  });
  thirdFormGroup = this.fb.group({
    presentAddress: ['',[Validators.required] ],
    permanentAddress: ['', [Validators.required]]
  });
  isLinear = false;

  constructor(private fb:FormBuilder,private service:ServiceService){}
onClick()
{
this.isClicked=true;
}

onSubmitData()
{
  this.data.fullName=this.firstFormGroup.value.fullName as unknown as string
  this.data.emailId=this.firstFormGroup.value.emailId as unknown as string
  this.data.phoneNumber=this.firstFormGroup.value.phoneNumber as unknown as number
  this.data.fathersName=this.firstFormGroup.value.fathersName as unknown as string
  this.data.mothersName=this.firstFormGroup.value.mothersName as unknown as string
  this.data.dateOfBirth=this.firstFormGroup.value.dateOfBirth as unknown as string
  this.data.gender=this.firstFormGroup.value.gender as unknown as string
  this.data.skill=this.firstFormGroup.value.skill as unknown as string
  this.data.fullNameBank=this.secondFormGroup.value.fullName as unknown as string
  this.data.bankName=this.secondFormGroup.value.bankName as unknown as string
  this.data.IFSCcode=this.secondFormGroup.value.IFSCcode as unknown as string
  this.data.mobBanking=this.secondFormGroup.value.mobBanking as unknown as string
  this.data.netBanking=this.secondFormGroup.value.netBanking as unknown as string
  this.data.permanentAddress=this.thirdFormGroup.value.permanentAddress as unknown as string
  this.data.presentAddress=this.thirdFormGroup.value.presentAddress as unknown as string
  this.service.UpdateData(this.data)
  .subscribe(response => { alert("You are registered!")});
}
}
