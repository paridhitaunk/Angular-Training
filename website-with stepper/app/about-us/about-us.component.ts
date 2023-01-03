import { copyArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';

export interface Employee
{
  name:string;
  empid:number;
  designation:string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  employee:Employee[]=[{name:'paridhi',empid:111,designation:'trainee'},
                        {name:'kavita',empid:123,designation:'trainee'},
                        {name:'kavita',empid:124,designation:'trainee'}
                      ];

// sortedData:Employee[];
constructor(private fb:FormBuilder,private snackBar:MatSnackBar)
{
  // this.sortedData=this.employee.slice();
}

// sortData(sort:Sort)

// {

//   const data=this.employee.slice();

//   if(!sort.active || sort.direction==='')

//   {

//     this.sortedData=data;

//     return;

//   }

//     this.sortedData=data.sort((a,b)=>{

//         const isAsc=sort.direction==='asc';

//         switch(sort.active)

//         {

//           case 'ename':return this.compare(a.name,b.name,isAsc);

//           case 'empid':return this.compare(a.empid,b.empid,isAsc);

//           case 'designation':return this.compare(a.designation,b.designation,isAsc);

//           default:return 0;

//         }

//     });

// }
firstFormGroup = this.fb.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this.fb.group({
  secondCtrl: ['', Validators.required],
});
isLinear = false;
openState=false;

openSnackBar(message:string,action:string){
  this.snackBar.open(message,action,{duration:4000});
}

// compare(a:number |string,b:number |string,isAsc:boolean)
// {

//   return (a<b? -1 :1) * (isAsc ? 1:-1);

// }
}
