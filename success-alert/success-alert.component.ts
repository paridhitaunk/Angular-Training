import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent 
{
 username:string="";
 NewArray:number[]=[];
 count:number=0;
 i:number = 0;
 reset()
 {
  this.username="";
 }
 buttonclick()
 {
   this.count++;
   this.NewArray[this.i] = this.count;
   this.i++;
 }
}
