import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Paths} from '../../admin/admin-paths';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  password: string;
  // above paht will give following re3sponse
/*  {
    "name": "Ashwani",
    "roleName": "Admin"
  } 
 */

  //path= "https://jsonplaceholder.typicode.com/posts/1";

  private token = new BehaviorSubject<any>('');
  curToken = this.token.asObservable();
  setToken(token: any) {
      this.token.next(token)
    }
  
  private isLoggedIn = new BehaviorSubject<any>(false);
  loginStatus = this.isLoggedIn.asObservable();
  setLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn)
  }

  private loggedUserName = new BehaviorSubject<string>('');
  loggedUser = this.loggedUserName.asObservable();
  setLoggedInUser(loggedUser: string) {
    this.loggedUserName.next(loggedUser)
  }
  
  private loggedRoleName = new BehaviorSubject<string>('');
  loggedRole = this.loggedRoleName.asObservable();
  setLoggedRole(loggedRole: string) {
    this.loggedRoleName.next(loggedRole)
  }
  
  

  constructor(private http: HttpClient) {

   }

    getLoginDetails(username: string, password: string){
      this.username = username;
      this.password= password;     
      console.log(); 
      return this.http.get(Paths.loginPath+"?emailId="+this.username+"&password="+this.password);
    }


}
