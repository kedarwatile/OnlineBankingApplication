import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAccountComponent } from "./add-Account/add-account.component";
import { AddAdminComponent } from "./add-admin/add-admin.component";
import { AddcustomerComponent } from "./addcustomer/addcustomer.component";
import { AddtransactionComponent } from "./addtransaction/addtransaction.component";
import { CreditComponent } from "./credit/credit.component";
import { CredittransactionComponent } from "./credittransaction/credittransaction.component";
import { DebitComponent } from "./debit/debit.component";
import { DebittransactionComponent } from "./debittransaction/debittransaction.component";
import { FindByAccountComponent } from "./find-by-account/find-by-account.component";
import { FindbycustomeridComponent } from "./findbycustomerid/findbycustomerid.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { HomeComponent } from "./home/home.component";
import { AddLoanComponent } from "./loan/add-loan/add-loan.component";
import { LoanDetailsComponent } from "./loan/loan-details/loan-details.component";
import { LoanListComponent } from "./loan/loan-list/loan-list.component";
import { UpdateLoanComponent } from "./loan/update-loan/update-loan.component";
import { LoginComponent } from "./login/login.component";
import { UpdateAccountComponent } from "./update-account/update-account.component";
import { UpdateAdminComponent } from "./update-admin/update-admin.component";
import { UpdatecustomerComponent } from "./updatecustomer/updatecustomer.component";
import { UpdatetransactionComponent } from "./updatetransaction/updatetransaction.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { ViewAdminComponent } from "./view-admin/view-admin.component";
import { ViewAllAdminComponent } from "./view-all-admin/view-all-admin.component";
import { ViewAllComponent } from "./view-all/view-all.component";
import { ViewTransactionComponent } from "./view-transaction/view-transaction.component";
import { ViewallcustomersComponent } from "./viewallcustomers/viewallcustomers.component";
import { ViewalltransactionComponent } from "./viewalltransaction/viewalltransaction.component";
import { WelcomeComponent } from "./Welcome/welcome.component";






const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'signIn', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'signUp', component: CreateUserComponent },
  { path: 'forgot', component: ForgotPassComponent },
  



  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

 { path: 'welcome', component: WelcomeComponent },
  { path: 'account', component: ViewAllComponent },
  { path: 'newaccount', component: AddAccountComponent },
  { path: 'updateaccount/:accountId', component: UpdateAccountComponent },
  
  { path: 'admin', component: ViewAllAdminComponent },
  { path: 'newadmin', component: AddAdminComponent },
  { path: 'updateadmin/:adminId', component: UpdateAdminComponent },
  { path: 'view/:adminId', component: ViewAdminComponent },
  { path: 'newcustomer', component: AddcustomerComponent },
  { path: 'viewaccount/:accountId', component: FindByAccountComponent },
  { path: 'viewcustomer/:custId', component: FindbycustomeridComponent },
  { path: 'customer', component: ViewallcustomersComponent},
  { path: 'update/:custId', component: UpdatecustomerComponent },
 
  
  { path: 'loans', component: LoanListComponent },
  { path: 'add', component: AddLoanComponent },
  { path: 'updateloan/:id', component: UpdateLoanComponent },
  { path: 'details/:id', component: LoanDetailsComponent },

  { path: 'viewtransaction/:accountNo', component: ViewTransactionComponent },
  { path: 'newtransaction', component: AddtransactionComponent },
  { path: 'transaction', component: ViewalltransactionComponent},
  { path: 'tran/update/:accountNo', component: UpdatetransactionComponent},
  { path: 'credittransaction/:accountNo', component: CredittransactionComponent},
  { path: 'debit' , component: DebitComponent},
  { path: 'credit', component: CreditComponent},
  { path: 'debittransaction/:accountNo', component: DebittransactionComponent},

  //  { path: '', redirectTo: 'home', pathMatch: 'full' },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
