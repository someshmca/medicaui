import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClaimSearchComponent } from './claims/claim-search/claim-search.component';
import { ClaimResultComponent } from './claims/claim-result/claim-result.component';
import { ClaimComponent } from './claims/claim/claim.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContractsComponent } from './contracts/contracts.component';
import { RoleComponent } from './role/role.component';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ClaimSearchComponent, ClaimResultComponent, ClaimComponent, BenefitsComponent, ProgramsComponent, ContractsComponent, RoleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
