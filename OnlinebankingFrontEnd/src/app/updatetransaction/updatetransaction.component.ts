import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

//import { Transaction } from '../transaction';
//import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-updatetransaction',
  templateUrl: './updatetransaction.component.html',
  styleUrls: ['./updatetransaction.component.css']
})
export class UpdatetransactionComponent implements OnInit {

  accountNo!: number;
  transaction: Transaction = new Transaction;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit() {

    this.transaction = new Transaction();

    this.accountNo = this.route.snapshot.params['accountNo'];
   
    this.transactionService.viewTransaction(this.accountNo)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));
  }

 
  updateTransaction() {
    this.transactionService.updateTransaction(this.accountNo, this.transaction)
       .subscribe(data => {
        console.log(data);
        this.transaction = new Transaction();
        this.gotoList();
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.updateTransaction();    
  }

 
  gotoList() {
    this.router.navigate(['/transaction']);
  }
  


}
