import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css']
})
export class ClaimSearchComponent implements OnInit {
  
  claimSearchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.claimSearchForm = this.fb.group({
      ClaimId:1,
      MemberId: 1,
      Fname:'Kiran',
      Lname:'Kumar',
      DateOfBirth:'1990-10-17',
      SupplierId:1,
      SupplierName:'Praveen Sandur',
      ServiceDateFrom:'2020-10-18',
      ServiceDateTo:'2020-10-18',
      PractitionerId:2,
      FirstName:'Fayaz',
      LastName:'Mohammad'
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.Fname);
    console.log('Email', form.value.Lname);
    console.log('Message', form.value.SupplierName);
  }
}
