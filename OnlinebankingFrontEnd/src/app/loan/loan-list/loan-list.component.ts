import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans!: Observable<Loan[]>;
  loanss:Loan[]=[];
  _listFilter='';
  filteredLoans: any[] = [];
  
  searchArray: any[] = [];
  sortArray: any[] | undefined;
 
  constructor(private loanService: LoanService,
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
    this.loanService.getLoanList().subscribe((data: Loan[]) => {
      this.loanss = data;
      this.searchArray = data;
      this.sortArray = data;
      this.filteredLoans=this.loanss;
    // this.admin=data;
    // this.searchByfirstName();
    });

  }
  reloadData() {
    this.loans = this.loanService.getLoanList();
  }


  performFilter(filterBy: string): Loan[] {
    if(filterBy==''){
      return this.filteredLoans=this.loanss;
    }
    else if(Number.isInteger(parseInt(filterBy))){
          return this.filteredLoans = this.loanss.filter((emp: Loan) =>
          emp.loanId.toString().includes(filterBy));
    }
    else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredLoans = this.loanss.filter((emp: Loan) =>
      emp.applicant_name.toLocaleLowerCase().includes(filterBy) ||  emp.adminLoanAproval.toLocaleLowerCase().includes(filterBy));
    }
  }

  deleteLoan(id: number) {
    if(confirm("Are you sure you want to delete loan application id "+id)){
  
    this.loanService.deleteLoan(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

  updateLoan(id: number) {

    this.router.navigate(['updateloan', id]);
  }

  loanDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
