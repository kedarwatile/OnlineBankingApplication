import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { LoanService } from 'src/app/loan/loan.service';
import { Loan } from '../loan';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

id: number =0;
loan:Loan =new Loan;


constructor(private route: ActivatedRoute, private router: Router, private loanService: LoanService) { }

ngOnInit() {
  this.loan = new Loan();

  this.id = this.route.snapshot.params['id'];

 this.loanService.getLoanById(this.id)
    .subscribe(data => {
      console.log(data)
      this.loan= data;
    }, error => console.log(error));
}



list(){
  this.router.navigate(['loans']);
}
}

