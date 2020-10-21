import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IClaimReportsModel} from '../models/claim-reports.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimReportService {
  uri = "http://localhost:56465/";
  path = this.uri+"api/Claim/GetClaimReport";
  //path= "https://jsonplaceholder.typicode.com/posts/1";

  claimReportGrid: Array<IClaimReportsModel> = [  
    { 
      billId: 1, 
      claimId: 1, 
      providerName: "Praveen Sandur",
      memberName: "KiranKumar",
      converted: false,
      billed: 100,
      memberId: 1,
      hccamount: 10,
      allowed: 50,
      capitated: false,
      lastChanged: new Date("2020-10-18T00:00:00"),
      workSheetState: "Active"
    }  
  ];

  constructor(private http: HttpClient) {

   }

    getClaimReport(){
      //return this.http.get(this.path);
      return this.claimReportGrid;
    }

}
