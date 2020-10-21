import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = "http://localhost:56465/";
  path = this.uri+"api/Login/UserLogin";

  // above paht will give following re3sponse
/*  {
    "name": "Ashwani",
    "roleName": "Admin"
  } 
 */

  //path= "https://jsonplaceholder.typicode.com/posts/1";

  constructor(private http: HttpClient) {

   }

    getLoginDetails(){
      return this.http.get(this.path);
    }
}
