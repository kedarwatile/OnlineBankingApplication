import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsrService } from '../usr.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  
  errorMessage!: string;
  flag :boolean=true;
  constructor(
    private fb: FormBuilder,
    private uService: UsrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      mobNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
     // address: ['', Validators.required],
      role: ['', Validators.required],
    // firstname:[],
    // lastname:[],
    // mobNo:[],
    // email:[],
    // password:[], 
    // role:[],
    
    });
    //console.log(JSON.stringify(this.userForm.value, null, 2));
  }
   
  get t(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  addAUser() {
    this.uService.addUser(this.userForm.value).subscribe(
      (res:any) => {
        if(res!=null)
        {
          //console.log(res);
          this.router.navigate(['/signIn']);
        }
        else{
          this.flag=false;
        }
          
      },
      (error: any) => {
        this.errorMessage = error;
      }
      
    );
    
  }
}
