import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  account!: Observable<Account[]>;
  accounts:Account[]=[];
  _listFilter='';
  filteredAccounts: any[] = [];
  searchArray: any[] = [];
sortArray: any[] | undefined;

  constructor(private accountService: AccountService,
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

    this.accountService.viewAll().subscribe((data: Account[]) => {
      this.accounts = data;
      this.searchArray = data;
      this.sortArray = data;
      this.filteredAccounts=this.accounts;
    // this.admin=data;
    // this.searchByfirstName();
    });
  }

  reloadData() {
    this.account = this.accountService.viewAll();
  }


  performFilter(filterBy: string): Account[] {
    if(filterBy==''){
      return this.filteredAccounts=this.accounts;
    }
    else if(Number.isInteger(parseInt(filterBy))){
          return this.filteredAccounts = this.accounts.filter((emp:Account) =>
          emp.bankName.toString().includes(filterBy));
    }
    else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAccounts = this.accounts.filter((emp: Account) =>
      emp.branch.toLocaleLowerCase().includes(filterBy) ||emp.customer.firstName.toLocaleLowerCase().includes(filterBy)|| emp.ifsc.toLocaleLowerCase().includes(filterBy) ||  emp.accStatus.toLocaleLowerCase().includes(filterBy));
    }
  }

  removeAccount(accountId: number) {
   
      if(confirm("Are you sure to delete "+accountId)) {
     
      
      
   // alert("Do you want to delete it")
    this.accountService.removeAccount(accountId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As ACTIVE TRANSACTION OR LOAN IS ASSOCIATED WITH ACCOUNT"),error))
  }

  }
  updateAccount(accountId: number) {
    this.router.navigate(['updateaccount', accountId]);
  }


  findByAccount(accountId: number){
    this.router.navigate(['viewaccount', accountId]);
  }
viewAll(accountId:number){
  this.router.navigate(['view', accountId]);
}
 


}