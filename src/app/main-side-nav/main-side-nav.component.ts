import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.css']
})
export class MainSideNavComponent implements OnInit, AfterViewInit {
  isLoggedIn: boolean = false;
  linkToHome: string='';
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
    if(this.isLoggedIn==true){
        this.linkToHome='/dashboard';
    }
    else{
      this.linkToHome = '/login';
    }
  }
  ngAfterViewInit(){
    this.loginService.loginStatus.subscribe((data) => {
      console.log("main side nav after vinit logged status "+data);
      this.isLoggedIn = data;
    }
    );
  }
}
