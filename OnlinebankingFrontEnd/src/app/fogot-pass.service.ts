import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FogotPassService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private baseUrl = 'http://localhost:8082/api';
  constructor(private http:HttpClient) { }

  getUser(user: any): Observable<any> {
    console.log(user);
    return this.http.get(`${this.baseUrl}/get/user/${user.userName}`);
  }

  getUser1(user: any): Observable<any> {
    console.log(user);
    return this.http.get(`${this.baseUrl}/get/username`,user);
 
  }

  updatePass(user:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/reset/password`,user);
  }
}
