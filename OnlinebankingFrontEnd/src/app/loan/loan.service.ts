import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = 'http://localhost:8082/api/loan';
  constructor(private http: HttpClient) { }
  
  findByAdminId(adminId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/view/${adminId}`);
  }
  findByCustomerId(custId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/view/${custId}`);
  }
  getLoanById(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/byid/${id}`);
  }
  createLoan(loan: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}/add`, loan);
  }
  updateLoan(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/updateloan/${id}`, value);
  }
  deleteLoan(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  getLoanList(): Observable<any> {
  return this.http.get(`${this.baseUrl}/viewall`);
  }
  }
    

