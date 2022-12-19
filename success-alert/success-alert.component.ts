import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent 
{
 username:string="";
 isClicked:boolean=false;
 NewArray:number[]=[];
 count:number=0;
 i:number = 0;
 reset()
 {
  this.username="";
 }
 buttonclick()
 {
   this.isClicked=true;
   this.count++;
   this.NewArray[this.i] = this.count;
 }
}
