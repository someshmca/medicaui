import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IContractIDs, IContractDetail} from '../models/contracts-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {Paths} from '../admin-paths';
import { IBenefitIDs } from '../models/benefits-model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }
 

  getContractIDs(){
    return this.http.get<IContractIDs[]>(Paths.contractsIDList).pipe(catchError(this.handleError.bind(this)));
  }
  getContractDetail(contractId: string): Observable<IContractDetail> {
    //const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IContractDetail>(Paths.contractDetail+contractId).pipe(catchError(this.handleError.bind(this)));
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
