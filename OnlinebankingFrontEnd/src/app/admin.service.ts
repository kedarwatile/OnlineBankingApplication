import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }


  addAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addAdmin`, admin);
  }

  updateAdmin(adminId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/admin/update/${adminId}`, value);
  }

  removeAdmin(adminId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeadmin/${adminId}`, { responseType: 'text' });
  }

  viewAllAdmin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/viewall`);
  }

  viewAdmin(adminId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/view/${adminId}`);
  }


}