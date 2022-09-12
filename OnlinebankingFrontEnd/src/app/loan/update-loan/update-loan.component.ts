import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/loan/loan.service';
import { Loan } from '../loan';


@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  loanId!: number;
  loan: Loan = new Loan;
  
  submitted = false;

  constructor(private loanService:LoanService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.loan = new Loan();

    this.loanId = this.route.snapshot.params['id'];
   
    this.loanService.getLoanById(this.loanId)
      .subscribe(data => {-
        console.log(data)
        this.loan = data;
      }, error => console.log(error));
  }

  updateLoan() {
    this.loanService.updateLoan(this.loanId, this.loan)
      .subscribe(data => {
        console.log(data);
        this.loan = new Loan();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.updateLoan();    
  }

  gotoList() {
    this.router.navigate(['/loans']);
  }

}
