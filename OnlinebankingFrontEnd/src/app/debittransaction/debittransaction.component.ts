import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-debittransaction',
  templateUrl: './debittransaction.component.html',
  styleUrls: ['./debittransaction.component.css'],
  providers: [DatePipe]
})
export class DebittransactionComponent implements OnInit {


  accountNo!: number;
  transaction: Transaction = new Transaction; 
  // trans: Transaction = new Transaction;
  transactionDate: Date = new Date();
  accBal!: number;
  debit!: number;
  datePipe: DatePipe | undefined;
  submitted = false;
 

  constructor(private route: ActivatedRoute,private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit() {

    this.transaction = new Transaction();

    this.accountNo = this.route.snapshot.params['accountNo'];
    

    this.transactionService.viewTransaction(this.accountNo)
      .subscribe(data => {
        console.log(data);
        data.transactionDate = new Date();
        // Date = datePipe.transform(Date, 'yyyy-MM-dd');
        this.transaction = data;
      }, error => console.log(error));
  }

 
  debittransaction() {
    this.transactionService.debittransaction(this.accountNo, this.transaction)
       .subscribe(data => {
        Transaction.transactionDate = new Date();
       
        console.log(data);
       // if(this.accBal > this.debit)
       
        this.transaction = new Transaction();
     // if(Transaction.accBal) {

      
        this.gotoList();
      // }
      // else {
      //  // this.gotoList();
      //  // alert ("Debit Exceeded Transaction")
      // }
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.debittransaction();    
  }

 
  gotoList() {
    this.router.navigate(['/debit']);
  }
 
  // goto() {
  //   this.router.navigate(['/debittransaction/:accountNo']);
  // }
  
  


}

