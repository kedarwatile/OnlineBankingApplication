import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoanService } from 'src/app/loan/loan.service';
import { Loan } from '../loan';


@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})

export class AddLoanComponent implements OnInit {
 
  toastr: any;
  @ViewChild('uploader', { static: false }) uploader:any;

  loans!: Observable<Loan[]>;
 loan: Loan = new Loan();
  submitted = false;
  http: any;
  file!: File;

  constructor(private httpClient: HttpClient,private loanService: LoanService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.loans = this.loanService.getLoanList();
  
    }
  newCustomer(): void {
    this.submitted = false;
    this.loan = new Loan();
  }

  
  save()  { 
    this.loanService.createLoan(this.loan).subscribe(data => {
      console.log(data)
      this.loan = new Loan();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  onSubmit() {
    this.submitted = true;
    this.save();    
  }



  gotoList() {
    this.router.navigate(['/loans']);
  }
  test = [];
 
  selectFile(evt:any) {
    var files = evt.target.files; // FileList object
    this.file = files[0];
  }
  upload() {
    let fileToUpload: File;
    fileToUpload = this.file;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.uploader.nativeElement.value = '';
    this.httpClient.post("http://localhost:8082/api/Test", formData)
      .subscribe((data:any) => {
        if (data === "success") {
          alert("File "+fileToUpload.name+ " has been uploaded sucessfully")
          //this.toastr.success("File has been uploaded sucessfully", '', { timeOut: 2000, positionClass: 'toast-bottom-center' });
        
        } else {
        //  this.toastr.error(data.toString(), '', { timeOut: 2000, positionClass: 'toast-bottom-center' });
      alert("failed")  
      }
      });
   
  }

 
  handleFileSelect(evt:any) {
   
  
   /* var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let orderDetails = {
              order_id: results.data[i].Address,
              age: results.data[i].Age
            };
           this.test.push(orderDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
        }
      });
    }*/
   
  }




    
}