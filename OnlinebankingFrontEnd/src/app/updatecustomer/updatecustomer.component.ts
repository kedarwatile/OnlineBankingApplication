import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  custId!: number;
  customer: Customer = new Customer;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {

    this.customer = new Customer();

    this.custId = this.route.snapshot.params['custId'];
   
    this.customerService.findByCustomerId(this.custId)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

 
  updateCustomer() {
    this.customerService.updateCustomer(this.custId, this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      }, error => console.log(error));
  }
 

  onSubmit() {
    this.submitted = true;
    this.updateCustomer();    
  }

 
  gotoList() {
    this.router.navigate(['welcome']);
  }
  
  gotoHome() {
    this.router.navigate(['welcome']);
  }


}
