import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsuranceTypeComponent} from './insurance-type/insurance-type.component';
import {AgentComponent} from './agent/agent.component';

const routes: Routes = [
  {path: 'insurancetype', component: InsuranceTypeComponent},
  {path: 'agent', component: AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
