// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddAccountComponent } from "./add-Account/add-account.component";
import { AddAdminComponent } from "./add-admin/add-admin.component";
import { AddcustomerComponent } from "./addcustomer/addcustomer.component";
import { AddtransactionComponent } from "./addtransaction/addtransaction.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreditComponent } from "./credit/credit.component";
import { CredittransactionComponent } from "./credittransaction/credittransaction.component";
import { DebitComponent } from "./debit/debit.component";
import { DebittransactionComponent } from "./debittransaction/debittransaction.component";
import { FindByAccountComponent } from "./find-by-account/find-by-account.component";
import { FindByCustomerComponent } from "./find-by-customer/find-by-customer.component";
import { FindbycustomeridComponent } from "./findbycustomerid/findbycustomerid.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { HomeComponent } from "./home/home.component";
import { AddLoanComponent } from "./loan/add-loan/add-loan.component";
import { LoanDetailsComponent } from "./loan/loan-details/loan-details.component";
import { LoanListComponent } from "./loan/loan-list/loan-list.component";
import { UpdateLoanComponent } from "./loan/update-loan/update-loan.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RemoveAccountComponent } from "./remove-account/remove-account.component";
import { RemoveAdminComponent } from "./remove-admin/remove-admin.component";
import { RemovecustomerComponent } from "./removecustomer/removecustomer.component";
import { UpdateAccountComponent } from "./update-account/update-account.component";
import { UpdateAdminComponent } from "./update-admin/update-admin.component";
import { UpdatecustomerComponent } from "./updatecustomer/updatecustomer.component";
import { UpdatetransactionComponent } from "./updatetransaction/updatetransaction.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { UserComponent } from "./user/user.component";
import { ViewAdminComponent } from "./view-admin/view-admin.component";
import { ViewAllAdminComponent } from "./view-all-admin/view-all-admin.component";
import { ViewAllComponent } from "./view-all/view-all.component";
import { ViewTransactionComponent } from "./view-transaction/view-transaction.component";
import { ViewallcustomersComponent } from "./viewallcustomers/viewallcustomers.component";
import { ViewalltransactionComponent } from "./viewalltransaction/viewalltransaction.component";
import { WelcomeComponent } from "./Welcome/welcome.component";



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    ForgotPassComponent,
    AddAccountComponent,
    UpdateAccountComponent,
    RemoveAccountComponent,
    ViewAllComponent,
    //ViewAccountComponent,
    ViewAllComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    RemoveAdminComponent,
    ViewAdminComponent,
    ViewAllAdminComponent,
    FindByAccountComponent,
    AddcustomerComponent,
    FindByCustomerComponent,
    FindbycustomeridComponent,
    RemovecustomerComponent,
    UpdatecustomerComponent,
    ViewallcustomersComponent,
    NavbarComponent,
    AppComponent,
    AddLoanComponent,
    LoanListComponent,
    LoanDetailsComponent,
    UpdateLoanComponent,
     
 
    HomeComponent,
    WelcomeComponent,


    AddtransactionComponent,

    ViewTransactionComponent,
    CreditComponent,
    DebitComponent,
 
    UpdatetransactionComponent,
    ViewalltransactionComponent,
    CredittransactionComponent,
    DebittransactionComponent,
    // HomeComponent,

   
  
    // AllMoviesComponent,
    // CreateMovieComponent,
    // UpdateMoviesComponent,
    // DetailViewMovieComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
      // NgxCaptchaModule,
    //  TextMaskModule
  ],
  providers: [
   
    // AppAssetData,
 ],
  bootstrap: [AppComponent],
  //entryComponents: [LoginComponent]
})
export class AppModule { }
