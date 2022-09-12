import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' ,
})
export class CustomerService {
  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }


  addCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, customer);
  }

  updateCustomer(custId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/customer/update/${custId}`, value);
  }

  removeCustomer(custId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removes/${custId}`, { responseType: 'text' });
  }

  viewAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/viewall`);
  }

  findByCustomerId(custId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/view/${custId}`);
  }
  
  getCustomerListByAdmin (adminId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/view/${adminId}`);
  }
}
