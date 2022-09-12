import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})

export class AddcustomerComponent implements OnInit {

  admines!: Observable<Admin[]>;
  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.admines = this.adminService.viewAllAdmin();
  
    }
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  
  save()  { 
    this.customerService.addCustomer(this.customer).subscribe(data => {
      console.log(data)
      this.customer = new Customer();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  gotoList() {
    this.router.navigate(['/customer']);
  }

}