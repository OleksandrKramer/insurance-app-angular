import { Component, OnInit } from '@angular/core';
import {Filiation} from '../model/filiation';
import {FiliationService} from '../service/filiation.service';

@Component({
  selector: 'app-filiation',
  templateUrl: './filiation.component.html',
  styleUrls: ['./filiation.component.css']
})
export class FiliationComponent implements OnInit {

  filiations: any;
  filiation: Filiation = new Filiation();
  filToUpdate: Filiation;
  field: string;
  value: string;
  income: number;
  date: string;

  constructor(private filiationService: FiliationService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.filiationService.getFiliations().subscribe(data => {
      this.filiations = data;
      this.filiation = new Filiation();
    });
  }

  add() {
    this.filiationService.addFiliation(this.filiation).subscribe(() => {
      this.load();
    });
  }

  update(filiation: Filiation) {
    this.filToUpdate = filiation;
  }

  save() {
    if (this.filToUpdate.id !== '' && this.filToUpdate.name !== ''
    && this.filToUpdate.address !== '' && this.filToUpdate.phone !== '') {
      this.filiationService.updateFiliation(this.filToUpdate).subscribe( () => {
        this.load();
        this.filToUpdate = null;
      });
    }
  }

  delete(id: any) {
    this.filiationService.deleteFiliation(id).subscribe(() => {
     this.load();
    });
  }
  find() {
    this.filiationService.find(this.field, this.value).subscribe(data => {
      this.filiations = data;
    });
  }

  incomeByDate(date: string = '') {
    this.filiationService.incomeOfFiliationPerMonth(this.date).subscribe(data => {
      if ( date === '') {
        this.income = data;
      } else {
        window.alert(`Income in (${this.date}): ${data} gryven`);
      }
    });
  }






}
