import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IRuleIDs, IRuleDetails, IRuleAdd, IRuleAddResponse} from '../models/rules-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {Paths} from '../admin-paths';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

 
  constructor(private http: HttpClient) { }
  getRuleIDs(){
    return this.http.get<IRuleIDs[]>(Paths.rulesIDList).pipe(catchError(this.handleError.bind(this)));
  }
  getRuleDetails(ruleID: string): Observable<IRuleDetails> {
    //const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IRuleDetails>(Paths.ruleIDDetail+ruleID).pipe(catchError(this.handleError.bind(this)));
 }
   addRule(formData: IRuleAdd): Observable<IRuleAddResponse>{
    const body = JSON.stringify(formData);
    const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<IRuleAdd>(Paths.ruleAddPath, body,{headers: headerOptions} ).pipe(catchError(this.handleError.bind(this)));
   }
  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }

  // return an observable with a meaningful error message to the end user
  return throwError('There is a problem with the service.We are notified &   working on it.Please try again later.');
  }
}
