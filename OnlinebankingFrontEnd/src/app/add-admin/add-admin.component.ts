import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  admin: Admin = new Admin();
  submitted = false;
  

  constructor(private adminService: AdminService,  private router: Router) { }

  ngOnInit() {
    
  }






  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }

  
  save() {
    this.adminService.addAdmin(this.admin).subscribe(data => {
      console.log(data)
      this.admin = new Admin();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  gotoList() {
    this.router.navigate(['/admin']);
  }

}
