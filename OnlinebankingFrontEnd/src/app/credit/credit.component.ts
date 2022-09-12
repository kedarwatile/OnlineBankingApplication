import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

//import { Transaction } from '../transaction';
//import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  
  transaction!: Observable<Transaction[]>;
  transactions:Transaction[]=[];
  _listFilter='';
  filteredTransactions: any[] = [];
  searchArray: any[] = [];
sortArray: any[] | undefined;


  constructor(private transactionService: TransactionService,
    private router: Router) {}


    get listFilter(): string {
      // alert("kedar")
      return this._listFilter;
    }
    set listFilter(value: string) {
     
      this._listFilter = value;
     this.performFilter(value);
    //  console.log(value);
    }
  ngOnInit() {
    this.reloadData();
    this.transactionService.credit().subscribe((data: Transaction[]) => {
      this.transactions = data;
      this.searchArray = data;
      this.sortArray = data;
      this.filteredTransactions=this.transactions;
    });
  }

  reloadData() {
    this.transaction = this.transactionService.viewAllTransactions();
  }

  performFilter(filterBy: string): Transaction[] {
    if(filterBy==''){
      return this.filteredTransactions=this.transactions;
    }
    else if(Number.isInteger(parseInt(filterBy))){
          return this.filteredTransactions = this.transactions.filter((emp: Transaction) =>
          emp.accountNo.toString().includes(filterBy));
    }
    else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredTransactions = this.transactions.filter((emp: Transaction) =>
      emp.transactionType.toLocaleLowerCase().includes(filterBy) ||   emp.accountNo.toString().includes(filterBy)||   emp.status.toString().includes(filterBy));
    }
  }

  updateTransaction(accountNo: number) {
    this.router.navigate(['update', accountNo]);
  }


  findByTransactionId(accountNo: number){
    this.router.navigate(['viewtransaction', accountNo]);
  }

  credittransaction(accountNo: number) {
    this.router.navigate(['credittransaction', accountNo]);
  }

 



}
