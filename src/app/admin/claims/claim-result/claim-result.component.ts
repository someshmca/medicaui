import { Component, OnInit, DoCheck } from '@angular/core';
import { IClaimReportsModel } from '../../models/claim-reports.model';
import {ClaimReportService} from '../../services/claim-report.service';
@Component({
  selector: 'app-claim-result',
  templateUrl: './claim-result.component.html',
  styleUrls: ['./claim-result.component.css']
})
export class ClaimResultComponent implements OnInit, DoCheck {
  claimReportData:  Array<IClaimReportsModel>;
  constructor(private _claimReportService: ClaimReportService) { }
  ngOnInit() {
  }
  ngDoCheck(){
    this.claimReportData = this._claimReportService.getClaimReport();
    console.log("Claim report data "+this.claimReportData);

  }
  
}
