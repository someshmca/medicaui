import { Component, OnInit} from '@angular/core';
import { ClaimReportService } from '../../services/claim-report.service';
import { ClaimService } from '../../services/claim.service';
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-claim-result',
  templateUrl: './claim-result.component.html',
  styleUrls: ['./claim-result.component.css']
})
export class ClaimResultComponent implements OnInit  {
 
  claimResults = [];
  constructor(private _claimReportService: ClaimReportService, private _claimService: ClaimService, private _route: Router){

  }
  ngOnInit(){
    this._claimReportService.claimResultsVal.subscribe(
      (data) =>{
        this.claimResults = data;
      }
    );
  }

  
  setClaimId(id: string){
    this._claimService.setClaimId(id);
    console.log("Id : "+id);
   // this.isClaimReportsHidden= true;
    this._route.navigate(['/claim']);
  }
  
}
