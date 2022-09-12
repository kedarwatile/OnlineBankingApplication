import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LogginService {
  private url = 'http://localhost:8082/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
    }),
  };

  public isLoginStatus: boolean=true;
  public userRole: boolean=true;
  public custId: number=0;
  public userName:string="";
  

  getLoginStatus() {
    return this.isLoginStatus;
  }
  setLoginStatus(status: any) {
    this.isLoginStatus = status;
  }

  getUserRole() {
    return this.userRole;
  }

  setUserRole(role: any) {
    this.userRole = role;
  }

  getCustomerId() {
    return this.custId;
  }

  setCustomerId(id: any) {
    this.custId = id;
  }

  getUsername() {
    return this.userName;
  }

  setUsername(Name: any) {
    this.userName = Name;
  }

  constructor(private httpClient: HttpClient) {}

  login(login:any): Observable<any> {
  
    return this.httpClient
      .post<Login>(
        this.url + '/login',
        JSON.stringify(login),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  logout(): Observable<any> {
    
    this.isLoginStatus = true;
    this.userRole = true;
    return this.httpClient
      .post<Login>(this.url + '/logout', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
