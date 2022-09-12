import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  
  adminId: number = 0;
  admin: Admin = new Admin;

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.admin = new Admin();

    this.adminId = this.route.snapshot.params['adminId'];

    this.adminService.viewAdmin(this.adminId)
      .subscribe(data => {
        console.log(data)
        this.admin = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['admin']);
  }
 


}
