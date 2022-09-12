import { Admin } from "./admin";
import { Customer } from "./customer";

export class Account {
    accountId: number=0;
    customer: Customer=new Customer;
    admin: Admin=new Admin;
    accStatus: string="";
    branch: String="";
   bankName: String="";
  ifsc:String="";
   city: String="";
   state: String="";
   country:String="";
   pincode: String="";
 
  accountRating: any;
  accountDate: any;

    
 }

 