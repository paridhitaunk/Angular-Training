import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url:string="http://localhost:3000";

  postData(data: any): Observable<any> 
  {
    return this.http.post<any>(`${this.url}/posts`, data)
  }
  get(data:any): Observable<any>
  {
    return this.http.get<any>(`${this.url}/posts`)
  }
  UpdateData(data: any): Observable<any> 
  {
    return this.http.post<any>(`${this.url}/stepper`, data)
  }

}
