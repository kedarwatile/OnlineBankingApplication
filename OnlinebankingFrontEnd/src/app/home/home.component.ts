import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../login/loggin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  userRole: any;
  status!: boolean;
  
  constructor(public lService: LogginService,private router:Router) { }

  ngOnInit(): void {
    
  }
 
   
    }


