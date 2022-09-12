import { Component, OnInit } from '@angular/core';
//import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FogotPassService } from '../fogot-pass.service';
// import { User } from '../user/user';
import {  VerifyUser } from './VerifyUser';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  user:VerifyUser =new VerifyUser();
  flag : boolean = false;
  spanFlag :boolean = true;
  constructor(private passService:FogotPassService,private router:Router) { 
  
  }

 

  ngOnInit(): void {
   // console.log(JSON.stringify(this.user, null, 2));
  }

  onSubmit():void{
    //console.log(this.user);
   // console.log(JSON.stringify(this.user, null, 2));
  this.passService.getUser(this.user).subscribe(
    
    data=>{
      if(data===true)
      {
        this.flag=true;
      }else{
        this.spanFlag=data;
      }
      }
      ,error => console.log(error));
      
  this.flag=!this.spanFlag;
  //console.log(JSON.stringify(this.user, null, 3));
  }

  

  onConfirm():void{
    //console.log(JSON.stringify(this.user, null, 4));
    //console.log(this.user);
    this.passService.updatePass(this.user).subscribe(data=>
    this.router.navigate(['/signIn']));
   // console.log(JSON.stringify(this.user, null, 2));
  // console.log(JSON.stringify(this.user, null,5 ));
  }
  

}
