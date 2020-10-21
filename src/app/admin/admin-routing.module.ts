import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClaimSearchComponent} from './claims/claim-search/claim-search.component';
import {ClaimResultComponent} from './claims/claim-result/claim-result.component';
import {ClaimComponent} from './claims/claim/claim.component';
import {LoginComponent} from '../login/login.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContractsComponent } from './contracts/contracts.component';
import { RoleComponent } from './role/role.component';
const routes: Routes = [
  {path: 'claim-search', component: ClaimSearchComponent},
  {path: 'claim-result', component: ClaimResultComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'roles', component: RoleComponent},
  {path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
