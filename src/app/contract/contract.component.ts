import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Contract} from '../model/contract';
import {AgentService} from '../service/agent.service';
import {FiliationService} from '../service/filiation.service';
import {InsuranceTypeService} from '../service/insurance-type.service';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContractComponent implements OnInit {

  contracts: any;
  filiations: any;
  agents: any;
  types: any;
  contract: Contract = new Contract();
  contractToUpdate: Contract;
  field: string;
  value: string;

  constructor(private agentService: AgentService,
              private filiationService: FiliationService,
              private typeService: InsuranceTypeService,
              private contractService: ContractService) {
  }

  ngOnInit() {
    this.load();
    this.loadAgents();
    this.loadFiliations();
    this.loadTypes();
  }

  load() {
    this.contractService.getContrats().subscribe(data => {
      this.contracts = data;
      this.contract = new Contract();

    });
  }

  loadFiliations() {
    this.filiationService.getFiliations().subscribe(data => {
      this.filiations = data;
    });
  }

  loadAgents() {
    this.agentService.getAgents().subscribe(data => {
      this.agents = data;
    });
  }

  loadTypes() {
    this.typeService.getType().subscribe(data => {
      this.types = data;
    });
  }

  create() {
    this.contractService.addContract(this.contract).subscribe(() => {
      this.load();
    });
  }

  update(contract: Contract) {
    this.contractToUpdate = contract;
    this.contractToUpdate.filiation = contract.filiation.id;
    this.contractToUpdate.insuranceType = contract.insuranceType.id;
    this.contractToUpdate.agent = contract.agent.id;
  }

  save() {
    if (this.contractToUpdate.amountPay > 0 && this.contractToUpdate.baseTaryfPay > 0
      && this.contractToUpdate.date !== '') {
      this.contractService.updateContract(this.contractToUpdate).subscribe(() => {
        this.load();
        this.contractToUpdate = null;
      });
    }
  }

  delete(id: any) {
    this.contractService.deleteContract(id).subscribe(() => {
      this.load();
    });

  }

  find() {
    this.contractService.find(this.field, this.value).subscribe(data => {
      this.contracts = data;
    });
  }
}

