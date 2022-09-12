import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-viewallcustomers',
  templateUrl: './viewallcustomers.component.html',
  styleUrls: ['./viewallcustomers.component.css']
})
export class ViewallcustomersComponent implements OnInit {

  
  customer!: Observable<Customer[]>;
  firstName:string | undefined;
  customers:Customer[]=[];
  _listFilter='';
filteredCustomers: any[] = [];

searchArray: any[] = [];
sortArray: any[] | undefined;


  constructor(private customerService: CustomerService,
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

    this.customerService.viewAllCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
      this.searchArray = data;
      this.sortArray = data;
      this.filteredCustomers=this.customers;
    // this.admin=data;
    // this.searchByfirstName();
    });
  }

  reloadData() {
    this.customer = this.customerService.viewAllCustomers();
  }

  performFilter(filterBy: string): Customer[] {
    if(filterBy==''){
      return this.filteredCustomers=this.customers;
    }
    else if(Number.isInteger(parseInt(filterBy))){
          return this.filteredCustomers = this.customers.filter((emp:Customer) =>
          emp.mobNo.toString().includes(filterBy));
    }
    else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.filteredCustomers = this.customers.filter((emp: Customer) =>
      emp.firstName.toLocaleLowerCase().includes(filterBy) || emp.lastName.toLocaleLowerCase().includes(filterBy));
    }
  }


  removeCustomer(custId: number) {

    if(confirm("Are you sure to delete "+custId)) {
   // alert("Do you really want to delete customer")
    this.customerService.removeCustomer(custId)
      .subscribe(
        data => {
          console.log(data);
          alert("DELETED SUCCESSFULLY");
          this.reloadData();
        },
        error => console.log(alert("NOT DELETED As CUSTOMER IS ASSOCIATED WITH ACCOUNT OR USERS"),error))

  }

  }
  updateCustomer(custId: number) {
    this.router.navigate(['update', custId]);
  }


  findByCustomerId(custId: number){
    this.router.navigate(['viewcustomer', custId]);
  }
 



}
