import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyUser } from '../forgot-pass/VerifyUser';
import { LogginService } from './loggin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  loginForm!: FormGroup;
  errorMessage: string | undefined;
  submitted = false;
flag:boolean = true;
  verifyUser: VerifyUser = new VerifyUser;
  //private userRole: string;
  constructor(
    private fb: FormBuilder,
    private lService: LogginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verifyUser = new VerifyUser();
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      // recaptcha
      // : ['', [Validators.required] ],
      password: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

  //siteKey:string ="6LeY6f8eAAAAAAoMIkHHE2y4Ir-osMiHG9eR6KeR";

  doLogin() {
    this.verifyUser.userName=this.loginForm.value.userName;
    this.verifyUser.password=this.loginForm.value.password;
    
    this.lService
      .login(this.verifyUser)
      .subscribe(
        (res: any) => {
          if(res != null){
          if (res.user.role === 'Admin') {
            this.lService.setUserRole(true);
            //console.log(this.lService.getUserRole());
            
          } else {
            this.lService.setUserRole(false);
          }
          //console.log(res.loginStatus);
          //console.log(res.user.customer.custId);
          if (res.id != null) {
            this.lService.setCustomerId(res.id);
          }
         
          this.lService.setLoginStatus(res.loginStatus);
         
          this.router.navigate(['/welcome']);
          // this.router.navigate(['/newcustomer']);

        }
        else{
          this.flag=false;
          // alert("Invalid Data");
        }
        

          //this.lService.setUserRole(res.user.role);
          //this.userRole = res.user.role;
         // this.router.navigate(['']);
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
  }
  goTo():void{
    this.router.navigate(['/forgot']);
    
  }
 
}
