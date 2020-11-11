import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClaimSearchComponent} from './claims/claim-search/claim-search.component';
import {ClaimResultComponent} from './claims/claim-result/claim-result.component';
import {ClaimComponent} from './claims/claim/claim.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContractsComponent } from './contracts/contracts.component';
import { RoleComponent } from './role/role.component';
import { RulesComponent } from './rules/rules.component';
import { AddRuleComponent } from './rules/add-rule/add-rule.component';
const routes: Routes = [
  {path: 'claim-search', component: ClaimSearchComponent},
  {path: 'claim-result', component: ClaimResultComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'roles', component: RoleComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'add-rule', component: AddRuleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
