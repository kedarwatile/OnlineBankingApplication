import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-credittransaction',
  templateUrl: './credittransaction.component.html',
  styleUrls: ['./credittransaction.component.css']
})
export class CredittransactionComponent implements OnInit {


  accountNo!: number;
  transaction: Transaction = new Transaction; 
  // trans: Transaction = new Transaction;
  transactionDate: Date = new Date();
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
        this.transaction = data;
      }, error => console.log(error));
  }

 
  credittransaction() {
    this.transactionService.credittransaction(this.accountNo, this.transaction)
       .subscribe(data => {
        Transaction.transactionDate = new Date();
       
        console.log(data);
       
        this.transaction = new Transaction();
      
        this.gotoList();
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.credittransaction();    
  }

 
  gotoList() {
    this.router.navigate(['/credit']);
  }
  


}

