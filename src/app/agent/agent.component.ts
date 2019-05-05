import { Component, OnInit } from '@angular/core';
import {Agent} from '../model/agent';
import {AgentService} from '../service/agent.service';
import {FiliationService} from '../service/filiation.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  agents: any;
  filiations: any;
  agentToUpdate: Agent;
  agent: Agent = new Agent();
  field: string;
  value: string;
  salary: number;
  name: string;


  constructor(private agentService: AgentService,
              private filationService: FiliationService) { }

  ngOnInit() {
    this.load();
    this.loadFiliations();
  }

  load() {
    this.agentService.getAgents().subscribe(data => {
      this.agents = data;
    });
  }

  loadFiliations() {
    this.filationService.getFiliations().subscribe(data => {
      this.filiations = data;
    });
  }

  create() {
    this.agentService.add(this.agent).subscribe(() => {
      this.load();
    });
  }

  update(agent: Agent) {
    this.agentToUpdate = agent;
    this.agentToUpdate.filiation = agent.filiation.id;
  }

  save() {
    if (this.agentToUpdate.surname !== '' && this.agentToUpdate.firstname !== '' &&
    this.agentToUpdate.patronymic !== '' && this.agentToUpdate.address !== '' &&
    this.agentToUpdate.phone !== '') {
      this.agentService.update(this.agentToUpdate).subscribe(() => {
        this.load();
        this.agentToUpdate = null;
      });
    }
  }

  delete(id: any) {
    this.agentService.delete(id).subscribe(() => {
      this.load();
    });
  }
  find() {
    this.agentService.find(this.field, this.value).subscribe(data => {
      this.agents = data;
    });
  }

  salaryAgent(name: string = '') {
    this.agentService.salaryOfAgent(name).subscribe(data => {
      if (name === '') {
        this.salary = data;
      } else {
        window.alert (` Salary of ${name} ${data}`);
      }
    });
  }

}
