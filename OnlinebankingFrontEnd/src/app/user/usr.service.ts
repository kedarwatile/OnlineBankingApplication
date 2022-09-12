import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { Customer } from '../customer';
import { Admin } from '../admin';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root',
})
export class UsrService {
  private url = 'http://localhost:8082/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  addUser(customer: any): Observable<any> {

   if(customer.role==="customer")
   {
    const key = 'TUtyh';
    try {
      customer.password=CryptoJS.AES.encrypt(JSON.stringify(customer.password), key).toString();
      } catch (e) {
        console.log(e);
    
      }
       console.log(JSON.stringify(customer));

       try {
        const bytes = CryptoJS.AES.decrypt(customer.password,key);
        if (bytes.toString()) {
          customer.password=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          //console.log(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
        }
       // return this.verifyUser.password;
      } catch (e) {
        console.log(e);
      }
      
   return this.httpClient
      .post<Customer>(


        this.url + '/add',
        JSON.stringify(customer),
        this.httpOptions


      )
      .pipe(catchError(this.handleError));
      }
      else
      { 
        const key = 'TUtyhsds';
        try {
          customer.password=CryptoJS.AES.encrypt(JSON.stringify(customer.password), key).toString();
          } catch (e) {
            console.log(e);
        
          }
        //  console.log(JSON.stringify(customer));

         
    try {
      const bytes = CryptoJS.AES.decrypt(customer.password,key);
      if (bytes.toString()) {
        customer.password=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        //console.log(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
      }
     // return this.verifyUser.password;
    } catch (e) {
      console.log(e);
    }

        //console.log("else");
        return this.httpClient
      .post<Admin>(
        this.url + '/addAdmin',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
   
      }
      
    }

  removeUser(user: any): Observable<any> {
    return this.httpClient
      .post<User>(
        this.url + '/removeuser',
        JSON.stringify(user),
        this.httpOptions
      )
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
