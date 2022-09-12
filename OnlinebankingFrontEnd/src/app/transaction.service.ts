import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }


  addTransaction(transaction: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/transaction/newtransaction`, transaction);
  }

  credittransaction(accountNo: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/transaction/credit/${accountNo}`, value);
  }
  debittransaction(accountNo: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/transaction/debit/${accountNo}`, value);
  }
  updateTransaction(accountNo: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/transaction/update/${accountNo}`, value);
  }

  viewTransaction(accountNo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/transaction/view/${accountNo}`);
  }

  viewAllTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transaction/viewall`);
  }

  credit(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transaction/viewall`);
  }

  debit(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transaction/viewall`);
  }


   findByTransactionId(accountNo: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/transaction/view/${accountNo}`);
   }
  // findByAccountId(accountId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/account/view/${accountId}`);
  // }
  findByAccount(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/view/${accountId}`);
  }
}