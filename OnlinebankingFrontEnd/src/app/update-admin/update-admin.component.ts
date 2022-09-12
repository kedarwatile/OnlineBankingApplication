import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  adminId!: number;
  admin: Admin = new Admin;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {

    this.admin = new Admin();

    this.adminId = this.route.snapshot.params['adminId'];
   
    this.adminService.viewAdmin(this.adminId)
      .subscribe(data => {
        console.log(data)
        this.admin = data;
      }, error => console.log(error));
  }

 
  updateAdmin() {
    this.adminService.updateAdmin(this.adminId, this.admin)
      .subscribe(data => {
        console.log(data);
        this.admin = new Admin();
        this.gotoList();
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.updateAdmin();    
  }

 
  gotoList() {
    this.router.navigate(['welcome']);
  }

  gotoHome() {
    this.router.navigate(['welcome']);
  }
  
}
