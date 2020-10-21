import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable } from 'rxjs';
import {LoginService} from '../admin/services/login.service';
import {LoginModel} from  '../admin/models/login.model';
import {LoginResponseModel} from '../admin/models/login-response.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  @ViewChild('loginForm') loginForm: NgForm;

  loginData: any;
  submitted = false;
  userName: string;
  password: string;
  loginModel = new LoginModel('ashwani.kumar@infinite.com','pass@1234');

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

    this.submitted = true;
    this.userName = this.loginForm.value.EmailId;
    this.password = this.loginForm.value.Password;
     this.loginService.getLoginDetails().subscribe(
            (data:LoginModel ) =>  {
                this.loginData = JSON.stringify(data);
            }
          );
   }

}

