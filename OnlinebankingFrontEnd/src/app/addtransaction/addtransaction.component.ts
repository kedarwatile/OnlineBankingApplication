import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})

export class AddtransactionComponent implements OnInit {

 // admines!: Observable<Admin[]>;
  transaction: Transaction = new Transaction();
  submitted = false;
  accounts!:Observable<Account[]>;
  // accountService: any;

  constructor(private transactionService: TransactionService,private accountService: AccountService,  private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.accounts = this.accountService.viewAll();
  
     }
  newTransaction(): void {
    this.submitted = false;
    this.transaction = new Transaction();
  }

  
  save()  { 
   // alert("save ="+this.transaction)
    this.transactionService.addTransaction(this.transaction).subscribe(data => {
      console.log(data)
      this.transaction = new Transaction();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  onSubmit() {
  //  alert("onSubmit");
    this.submitted = true;
    this.save();    
  }


  gotoList() {
   // alert("TransactionList")
    this.router.navigate(['/transaction']);
  }

}


