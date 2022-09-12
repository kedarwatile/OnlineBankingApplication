import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-findbycustomerid',
  templateUrl: './findbycustomerid.component.html',
  styleUrls: ['./findbycustomerid.component.css']
})
export class FindbycustomeridComponent implements OnInit {

  
  custId: number = 0;
  customer: Customer = new Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();

    this.custId = this.route.snapshot.params['custId'];

    this.customerService.findByCustomerId(this.custId)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['customer']);
  }
 

}
