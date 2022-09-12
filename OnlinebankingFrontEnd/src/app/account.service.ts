import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }


  addAccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/account/newaccount`, account);
  }

  updateAccount(accountId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/account/update/${accountId}`, value);
  }

  removeAccount(accountId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeaccount/${accountId}`, { responseType: 'text' });
  }

  viewAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/viewall`);
  }

  findByAccount(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/view/${accountId}`);
  }
  // viewAllByAccountsDate(date: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/date/${date}`);
  // }
  findByAdminId(adminId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/view/${adminId}`);
  }
  findByCustomerId(custId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/view/${custId}`);
  }

}



















// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//   // getAccountList(): (accountId: number) => void {
//   //   throw new Error('Method not implemented.');
//   // }

  
//   private baseUrl = 'http://localhost:8082/api/account';

 

//   constructor(private http: HttpClient) { }


//   addAccount(account: Object): Observable<Object> {
//     return this.http.post(`${this.baseUrl}/addAccount`, account);
//   }

 

//   updateAccount(accountId: number, value: any): Observable<Object> {
//     return this.http.put(`${this.baseUrl}/update/${accountId}`, value);
//   }
//   removeAccount(accountId: number): Observable<any> {
//          return this.http.delete(`${this.baseUrl}/delete/${accountId}`, { responseType: 'text' });
//        }
//  viewAccount(accountId: number): Observable<any> {
//         return this.http.get(`${this.baseUrl}/accountid/${accountId}`);
//       }
//       viewAllAccountsByDate(date: number): Observable<any> {
//         return this.http.get(`${this.baseUrl}/date/${date}`);
//       }
//       viewAllAccount(list: number): Observable<any> {
//         return this.http.get(`${this.baseUrl}/viewall/${list}`);
//       }
//       findByAdminId(adminId: number): Observable<any> {
//         return this.http.get(`${this.baseUrl}/admin/${adminId}`);
//     }
//     findByCustomerId(custId: number): Observable<any> {
//       return this.http.get(`${this.baseUrl}/userid/${custId}`);
//   }
//   viewAllProducts(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/allproducts/${id}`);
// }
//   }

