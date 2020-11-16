import { Component, OnInit } from '@angular/core';

import {RulesService} from '../../services/rules.service';
import { IRuleAdd, IRuleAddResponse} from '../../models/rules-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css']
})
export class AddRuleComponent implements OnInit {

  ruleAddForm: FormGroup;
  ruleAddRequest: IRuleAdd;
  ruleAddResponse: IRuleAddResponse;
  isRuleAdded: boolean = false;
  constructor(private rulesService: RulesService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.isRuleAdded = false;
    this.ruleAddForm = this.fb.group({   
      ruleId: ['', Validators.required],
      description:  ['', Validators.required],
      ruleGroupValue: ['', Validators.required],
      ruleValue:['']
    });    
  }


}


