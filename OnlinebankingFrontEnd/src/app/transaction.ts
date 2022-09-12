//import { Admin } from "./admin";

import { Account } from "./account";

export class Transaction {
  account: Account=new Account;
    accountNo: number=0;
    status: string = "";
    transactionDate: Date = new Date() ;
    // transdd: Date = new Date();
    transactionTime: string = "";
    credit: number=0;
    debit: number=0;
    transactionId: number=0;
    transactionType: string ="";
    accBal:number=0;
  static transactionDate: Date;
   

}
