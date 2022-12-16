import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  alert:boolean = false;
  email!: string;
  password!: string;
  
  constructor(private router:Router) {}

  ngOnInit(): void {}
    
  logIn(){
    if(this.email == "admin@gmail.com" && this.password == "Admin@123"){
      this.router.navigate(['/admin-panel'])
    }
    else{
      alert("Please Enter Valid Details");
    }
  }

}