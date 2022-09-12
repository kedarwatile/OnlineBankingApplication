import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  accountId!: number;
  account: Account = new Account;
  admines!: Observable<Admin[]>;
  customers!: Observable<Customer[]>;
  submitted = false;

  constructor(private customerService:CustomerService,private adminService:AdminService,private route: ActivatedRoute,private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {

    this.account = new Account();

    this.accountId = this.route.snapshot.params['accountId'];
   
    this.accountService.findByAccount(this.accountId)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => console.log(error));
  }
  reloadData(){
    this.admines=this.adminService.viewAllAdmin();
    this.customers=this.customerService.viewAllCustomers();
  }
 
  updateAccount() {
    this.accountService.updateAccount(this.accountId, this.account)
      .subscribe(data => {
        console.log(data);
        this.account = new Account();
        this.gotoList();
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.updateAccount();    
  }

 
  gotoList() {
    this.router.navigate(['/Account']);
  }
  

}
