import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsuranceTypeComponent} from './insurance-type/insurance-type.component';
import {AgentComponent} from './agent/agent.component';
import {FiliationComponent} from './filiation/filiation.component';
import {ContractComponent} from './contract/contract.component';

const routes: Routes = [
  {path: 'insurancetype', component: InsuranceTypeComponent},
  {path: 'agent', component: AgentComponent},
  {path: 'filiation', component: FiliationComponent},
  {path: 'contract', component: ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
