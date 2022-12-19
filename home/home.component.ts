import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
disable:boolean=false;
data:number = 50;
name:string = "paridhi taunk";
isDirecitve=false;
add()
{
  this.data+=50
  this.isDirecitve=true;
};
delete()
{
  this.data-=50;
  this.isDirecitve=false;
}
getcolor()
{
  return 'red';
}
constructor()
{
  setTimeout(()=>{
    this.disable=false;

  },6000)
}
}
