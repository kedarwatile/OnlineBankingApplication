import { Component, OnInit } from '@angular/core';
import { LogginService } from '../login/loggin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userRole: any;
  status!: boolean;
  
  // login!:Observable<Login[]>;
  // admin!: Observable<Admin[]>;
  constructor(public lService: LogginService,private router:Router) {}

  ngOnInit(): void {
    // this.reloadData();
   
  }

  
  // reloadData() {
  //   // this.log.ngOnInit();
  //   //  this.log=this.log.ngOnInit();
  //   // return this.log.ngOnInit()  ;
  //   // this.lService=this.lService.getCustomerId();
   
  // }

  onLogout() {
    
    
     this.lService.logout();
     this.router.navigate(['signIn']);
     this.lService.isLoginStatus=false;
  }
}
