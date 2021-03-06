import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
import {LoginModel, LoginResponseModel} from  '../models/login.model';
import {Paths} from '../../admin/admin-paths';
import { stringify } from '@angular/compiler/src/util';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  @ViewChild('loginForm') loginForm: NgForm;
  loginData: any;
  submitted = false;

  isLoginSuccess = false;
  userName: string;
  password: string;
  responseName: string = '';
  responseRoleName: string = '';

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;

  ngOnInit(): void {
  }

  // getLoginDetails(){
  //   this.loginService.getLoginDetails().subscribe(
  //     (data:LoginModel ) =>  {
  //         this.loginData = JSON.stringify(data);
  //     }
  //   )
  // }

  onSubmit() {

    this.userName = this.loginForm.value.emailId;
    this.password = this.loginForm.value.password;

    console.log("username : "+this.userName);
    console.log("password : "+this.password);
    console.log("Login path : "+Paths.loginPath);
    if(this.userName =="admin@infinite.com" || this.userName =="ashwani.kumar@infinite.com"){
      this.invalidEmail = false;
    }
    else{
      this.invalidEmail = true;
    }
    if(this.password == '' || this.password != "pass@1234"){
      this.invalidPassword = true;
      return this.loginForm.invalid;
    }
    else{
      this.invalidPassword = false;
    }
    //if(this.userName=="ashwani.kumar@infinite.com" && this.password=="pass@1234")//{
     this.loginService.getLoginDetails(this.userName, this.password).subscribe(
            (data:LoginResponseModel ) =>  {
                this.loginData = data;
                this.loginService.setLoginStatus(true);
                this.loginService.setToken(this.loginData.token);
                this.responseName = this.loginData.name;
                this.responseRoleName = this.loginData.roleName;
                this.loginService.setLoggedInUser(this.responseName);
                this.loginService.setLoggedRole(this.responseRoleName);
                if((this.userName=="ashwani.kumar@infinite.com" && this.password=="pass@1234") || (this.userName=="admin@infinite.com" && this.password=="pass@1234")){
                  this.submitted = true;
                  this.isLoginSuccess = true;
                  console.log("Name : "+this.responseName );
                  console.log("Role Name : "+this.responseRoleName);   
                  this.router.navigate(['/dashboard'])
                }         
                
            }
          );
   // }
   }
   

}

