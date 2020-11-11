import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IBenefitIDs, IBenefitDetail} from '../models/benefits-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {Paths} from '../admin-paths';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

  constructor(private http: HttpClient) { }
  private claimID = new BehaviorSubject<number>(0);
    selectedClaimID = this.claimID.asObservable();
    setClaimId(claimID: number) {
       this.claimID.next(claimID)
     }


  getBenefitIDs(){
    return this.http.get<IBenefitIDs[]>(Paths.benefitsIDList).pipe(catchError(this.handleError.bind(this)));
  }
  getBenefitDetail(benefitId: string): Observable<IBenefitDetail> {
    //const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IBenefitDetail>(Paths.benefitDetail+'/'+benefitId).pipe(catchError(this.handleError.bind(this)));
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
