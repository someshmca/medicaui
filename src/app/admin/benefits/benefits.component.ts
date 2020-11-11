import { Component, OnInit } from '@angular/core';
import {IBenefitIDs, IBenefitDetail} from '../models/benefits-model';
import {BenefitService} from '../services/benefit.service';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  benefitIDs:IBenefitIDs[] = [];
  benefitDetail: IBenefitDetail;
  isBenefitDetailCalled: boolean = false;
  constructor(private benefitService: BenefitService) { }

  ngOnInit() {
    this.benefitDetail = {
      benefitId: '',
    description: '',
    createid: '',
    createdby: '',
    updateid: '',
    lastupdate: ''
    }
     this.benefitService.getBenefitIDs().subscribe(
      (data: IBenefitIDs[]) => {
          this.benefitIDs = data;
          console.log(this.benefitIDs);
          //debugger;
      }
    )
  }

  getBenefitDetails(benefitId: string){
    this.benefitService.getBenefitDetail(benefitId).subscribe(
      (data: IBenefitDetail) => {
        this.isBenefitDetailCalled = true;
        this.benefitDetail = data;
        console.log("Benefit Detail : - "+this.benefitDetail);
        //debugger;
      }
    );
  }

}
