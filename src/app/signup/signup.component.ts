import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  confirmPass: string ='none';

  displayMsg: string = '';
  isAccountCreated: boolean=false;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required, Validators.email]),
    mobile: new FormControl("",[Validators.required, Validators.minLength(10), 
    Validators.pattern("[0-9]*") , Validators.maxLength(10)]),
    gender:new FormControl("", Validators.required),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), 
     Validators.maxLength(15)]),
    cpwd: new FormControl(""),
  })

  isUserValid: boolean = false;
  registerSubmited(){
    if(this.pwd.value == this.cpwd.value){
      // console.log(this.registerForm.valid);
      this.confirmPass = 'none'

      // created array sends to register array
      this.authService
      .registerUser([
        this.registerForm.value.firstname,
        this.registerForm.value.lastname,
        this.registerForm.value.email,
        this.registerForm.value.mobile,
        this.registerForm.value.gender,
        this.registerForm.value.pwd,
      ])
      .subscribe(res => {
        if (res == 'Failure'){
          this.isUserValid = false;
          alert('Register Unsuccessfull');
        } 
        else if(res == 'Already Exist'){
              this.displayMsg = 'Account already exist. Try another email.';
              this.isAccountCreated = false;
             }
        else{
          this.isUserValid = true;
          alert('Register Successfull');
        }
        });
      //   if(res == 'success'){
      //     this.displayMsg = 'Account created Successfully!';
      //     this.isAccountCreated = true;
      //    }
      //    else if(res == 'Already Exist'){
      //     this.displayMsg = 'Account already exist. Try another email.';
      //     this.isAccountCreated = false;
      //    }
      //    else{
      //     this.displayMsg = 'Something Went Wrong';
      //     this.isAccountCreated = false;
      //     console.log(res);
      //    }
      // });
    
    }
    else{
      this.confirmPass = 'inline';
    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender(): FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get pwd(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get cpwd(): FormControl{
    return this.registerForm.get("cpwd") as FormControl;
  }

}
