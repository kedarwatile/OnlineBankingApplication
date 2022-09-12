import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

import { AdminService } from '../admin.service';
// import { Admins } from '../admins';
// import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-view-all-admin',
  templateUrl: './view-all-admin.component.html',
  styleUrls: ['./view-all-admin.component.css']
})
export class ViewAllAdminComponent implements OnInit {


  admin!: Observable<Admin[]>;
  firstName:string | undefined;
  admins:Admin[]=[];
_listFilter='';
filteredAdmins: any[] = [];

searchArray: any[] = [];
sortArray: any[] | undefined;

  constructor(private adminService: AdminService,
    private router: Router) {}

    get listFilter(): string {
      // alert("kedar")
      return this._listFilter;
    }
    set listFilter(value: string) {
     
      this._listFilter = value;
     this.performFilter(value);
    //  console.log(value);
    }


  ngOnInit() {
    this.reloadData();
  //  this.loadDataAfterCleaning();
  this.adminService.viewAllAdmin().subscribe((data: Admin[]) => {
    this.admins = data;
    this.searchArray = data;
    this.sortArray = data;
    this.filteredAdmins=this.admins;
  // this.admin=data;
  // this.searchByfirstName();
  });

  }





  reloadData() {
    this.admin = this.adminService.viewAllAdmin();
  }



  performFilter(filterBy: string): Admin[] {
    if(filterBy==''){
      return this.filteredAdmins=this.admins;
    }
    else if(Number.isInteger(parseInt(filterBy))){
          return this.filteredAdmins = this.admins.filter((emp: Admin) =>
          emp.mobNo.toString().includes(filterBy));
    }
    else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredAdmins = this.admins.filter((emp: Admin) =>
      emp.firstName.toLocaleLowerCase().includes(filterBy) || emp.lastName.toLocaleLowerCase().includes(filterBy));
    }
  }


  // searchByfirstName(firstName:string) {
  //   // console.log("kedar");
  //   // alert("hwqweqw")
  //   this.admins = this.searchAsset.filter(
  //     (data) => data.firstName == this.firstName
    
  //   );
  // }


  
  

 

  removeAdmin(adminId: number) {

    if(confirm("Are you sure to delete "+adminId)) {
    //alert("Do you want to delete it")
    this.adminService.removeAdmin(adminId)
    
      .subscribe(
        data => {
          console.log(data);
     
          alert("Deleted successfully");
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As ADMIN IS ASSOCIATED WITH ACCOUNT OR USERS"),error))
        // alert(" not deleted");
  }
  }

  updateAdmin(adminId: number) {
    this.router.navigate(['updateadmin', adminId]);
  }


  viewAdmin(adminId: number){
    this.router.navigate(['view', adminId]);
  }
 


}
