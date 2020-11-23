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
import { ReactiveFormsModule } from '@angular/forms';
import { ClaimReportService } from './services/claim-report.service';
import { BenefitService} from './services/benefit.service';
import { RulesComponent } from './rules/rules.component';
import { AddRuleComponent } from './rules/add-rule/add-rule.component';
import { UpdateRuleComponent } from './rules/update-rule/update-rule.component';
import { ClientComponent } from './client/client.component';
import { AttributesComponent } from './attributes/attributes.component';


@NgModule({
  declarations: [ClaimSearchComponent, ClaimResultComponent, ClaimComponent, BenefitsComponent, ProgramsComponent, ContractsComponent, RoleComponent, RulesComponent, AddRuleComponent, UpdateRuleComponent, ClientComponent, AttributesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ClaimReportService,
    BenefitService
  ]
})
export class AdminModule { }
