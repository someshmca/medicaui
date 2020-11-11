import { Component, OnInit } from '@angular/core';
import {RulesService} from '../services/rules.service';
import {IRuleDetails, IRuleIDs} from '../models/rules-model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  ruleIDs: IRuleIDs[] = [];
  ruleID: string;
  ruleDescription: string;
  ruleValue: string;
  ruleGroup: string;
  isRuleIDCalled: boolean = false;
  ruleDetails: IRuleDetails;
  constructor(private rulesService: RulesService ) { }

  ngOnInit() {
    this.rulesService.getRuleIDs().subscribe(
      (data: IRuleIDs[]) => {
         this.ruleIDs = data;
      }
    );
  }
  
  getRuleDetails(ruleID: string){
    if(ruleID == 'Please Select the Rule'){
      this.isRuleIDCalled = false;
    }
    this.rulesService.getRuleDetails(ruleID).subscribe(
      (data: IRuleDetails) => {
        this.isRuleIDCalled = true;
        this.ruleDetails = data;
        this.ruleID = this.ruleDetails.ruleId;
        this.ruleDescription = this.ruleDetails.description;
        this.ruleValue = this.ruleDetails.value;
        this.ruleGroup = this.ruleDetails.ruleGroup;
      }
    );    
  }
}
