import { Component, ElementRef, OnInit } from '@angular/core';
import {RulesService} from '../services/rules.service';
import {IRuleDetails, IRuleIDs, 
  IRuleAdd, IRuleAddResponse, IRuleUpdate, IRuleUpdateResponse} from '../models/rules-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  addRuleForm: FormGroup;
  addRuleRequest: IRuleAdd;
  addRuleResponse: IRuleAddResponse;

  updateRuleForm: FormGroup;
  ruleIDs: IRuleIDs[] = [];
  ruleID: string;
  ruleDescription: string;
  ruleValue: string;
  ruleGroup: string;
  isRuleIDCalled: boolean = false;
  ruleDetails: IRuleDetails;
  ruleGroupList = [];  
  updateRuleRequest: IRuleUpdate;
  updateRuleResponse: IRuleUpdateResponse;
  updateModalIsOpen : boolean = false;
  addModalIsOpen : boolean = false;
  deleteModalIsOpen : boolean = false;
  isNewRuleAdded: boolean = false;
  isRuleUpdated: boolean = false;
  isRuleDeleted: boolean = false;

  constructor(private rulesService: RulesService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.rulesService.getRuleIDs().subscribe(
      (data: IRuleIDs[]) => {
         this.ruleIDs = data;
         //debugger;
      }
    ); 
    this.addRuleForm = this.fb.group({   
      description:  ['', Validators.required],
      ruleGroupValue: ['', Validators.required],
      ruleValue:['']
    });       
    this.updateRuleForm = this.fb.group({   
      uruleid: ['', Validators.required],
      uruledescrip:  ['', Validators.required],
      urulegroup: ['', Validators.required],
      urulevalue:['']
    });    
    this.rulesService.getRuleGroup().subscribe(
      (data) => {
        this.ruleGroupList = data;
        console.log("Rule group list "+this.ruleGroupList);
       // debugger;
      }
    )
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
  getRuleGroup(){
    this.rulesService.getRuleGroup().subscribe(
      (data) => {
        this.ruleGroupList = data;
      }
    )
  }
  
  addRule(form: FormGroup){
    console.log(form.value);
    //debugger;
    this.addRuleRequest = {
      ruleID: '',
      description: this.addRuleForm.get('description').value,
      ruleGroup: this.addRuleForm.get('ruleGroupValue').value,
      value: this.addRuleForm.get('ruleValue').value,
      createdid: '',
      createdby: '',
      updateid: '',
      lastupdate: ''
    };

    const headers = { 'content-type': 'application/json'};
    console.log("add rule request  : "+ this.addRuleRequest);
   // debugger;
    this.rulesService.addRule(this.addRuleRequest).subscribe(
      (data: IRuleAddResponse) => {
        console.log("Add Rule data : "+data);
        this.addRuleResponse = data;
        console.log("add Rule Response : "+this.addRuleResponse);
        this.isNewRuleAdded = true;        
        this.updateRuleForm.get('uruleid').reset;
        this.getRuleDetails(this.updateRuleForm.get('uruleid').value);
        this.rulesService.getRuleIDs().subscribe(
          (data: IRuleIDs[]) => {
             this.ruleIDs = data;
             //debugger;
          }
        ); 
        //debugger;
      }
    )
  }
  openAddModal(open : boolean)  {   
    this.addModalIsOpen = open;
  }
  openDeleteModal(open: boolean){
    this.deleteModalIsOpen = open;
  }
  openUpdateModal(open : boolean)  {
    
    this.updateRuleForm = this.fb.group({   
      uruleid: [this.ruleID, Validators.required],
      uruledescrip:  [this.ruleDescription, Validators.required],
      urulegroup: [this.ruleGroup, Validators.required],
      urulevalue:[this.ruleValue]
    });    
    this.updateModalIsOpen = open;
  }
  updateRule(){    

   // console.log(" u form value "+JSON.stringify(this.updateRuleForm.value));

    this.updateRuleRequest = {
      description: this.updateRuleForm.get('uruledescrip').value,
      value:  this.updateRuleForm.get('urulevalue').value,
      createdid: '',
      createdBy: '',
      updateid: '',
      lastupdate: '2020-11-13T01:17:23.528Z',
      ruleGroup:  this.updateRuleForm.get('urulegroup').value,
      ruleId: this.updateRuleForm.get('uruleid').value
    };
    const headers = { 'content-type': 'application/json'};
    console.log("Update Rule Request obj : "+ this.updateRuleRequest);
    //debugger;
    this.rulesService.updateRule(this.updateRuleRequest).subscribe(
      (data: IRuleUpdateResponse) => {
        console.log("Update Rule data : "+data);
       // debugger;
        this.updateRuleResponse = data;
        console.log("rule update response success: "+this.updateRuleResponse);
       // debugger;
        this.getRuleDetails(this.updateRuleRequest.ruleId);
        this.updateRuleForm.reset();
        this.isRuleUpdated = true;
        this.openUpdateModal(false);
       // debugger;
      }
    )
  }
  deleteRule(ruleId: string){
    console.log("ruleId in delete function : "+ruleId);
  //  debugger;
    this.rulesService.deleteRule(ruleId).subscribe(
      () => {
        //  debugger;
          console.log(" rule delete message : ");
          this.isRuleDeleted = true;
          this.openDeleteModal(true);
          this.isRuleIDCalled = false;
          this.rulesService.getRuleIDs().subscribe(
            (data: IRuleIDs[]) => {
               this.ruleIDs = data;
               //debugger;
            }
          ); 
         // debugger;
      }
    )
  }
}
