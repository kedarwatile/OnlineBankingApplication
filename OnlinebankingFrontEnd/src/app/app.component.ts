import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { LogginService } from './login/loggin.service';
import { Login } from './login/login';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineBanking';
  //  login!:Observable<Login[]>;
  // admin!: Observable<Admin[]>;
  // public login: Login = new Login; 


  // constructor(private loginService: LogginService,private log :LoginComponent,
  //   private router: Router) {}

  // ngOnInit() {
  //   this.reloadData();
  // }

  // reloadData() {
  //   this.log.ngOnInit();
  //   this.log=this.log.ngOnInit();
  //   return this.log.ngOnInit()  ;
   
  // }

}
