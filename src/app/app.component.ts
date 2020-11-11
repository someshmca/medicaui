import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './shared/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  user: string;
  role: string;
  isLoggedIn: boolean = false;


  constructor(private loginService: LoginService, private route: Router){

  }

  ngOnInit(){
      }
    ngAfterViewInit(){      
      this.loginService.loginStatus.subscribe((data) => {
        this.isLoggedIn = data;
      });
      this.loginService.loggedUser.subscribe((d)=>this.user=d);
      this.loginService.loggedRole.subscribe((d)=>this.role=d);
    }
    logout(){      
      this.loginService.setLoginStatus(false)
      this.route.navigate(['/login']);
    }
}
