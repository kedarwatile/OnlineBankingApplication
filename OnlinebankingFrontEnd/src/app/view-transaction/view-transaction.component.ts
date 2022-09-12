import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {

  
  accountNo: number = 0;
  transaction: Transaction = new Transaction;

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transaction = new Transaction();

    this.accountNo = this.route.snapshot.params['accountNo'];

    this.transactionService.viewTransaction(this.accountNo)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['transaction']);
  }
 


}
