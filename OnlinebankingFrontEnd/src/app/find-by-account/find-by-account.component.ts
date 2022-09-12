import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-find-by-account',
  templateUrl: './find-by-account.component.html',
  styleUrls: ['./find-by-account.component.css']
})
export class FindByAccountComponent implements OnInit {
  accountId: number = 0;
  account: Account = new Account;
  admin:Admin=new Admin;

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.account = new Account();

    this.accountId = this.route.snapshot.params['accountId'];
   

    this.accountService.findByAccount(this.accountId)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['account']);
  }
 


}