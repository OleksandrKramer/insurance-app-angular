import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FiliationService} from './service/filiation.service';
import {ContractService} from './service/contract.service';
import {AgentService} from './service/agent.service';
import {InsuranceTypeService} from './service/insurance-type.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AgentComponent } from './agent/agent.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    InsuranceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FiliationService,
    ContractService,
    AgentService,
    InsuranceTypeService,
    HttpClient
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
