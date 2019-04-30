import { Component, OnInit } from '@angular/core';
import {InsuranceTypeService} from '../service/insurance-type.service';
import {InsuranceType} from '../model/insuranceType';

@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.css']
})
export class InsuranceTypeComponent implements OnInit {

  types: any;
  type: InsuranceType = new InsuranceType();
  typeToUpdate: InsuranceType;
  field: string;
  value: string;

  constructor(private typeService: InsuranceTypeService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.typeService.getType().subscribe(data => {
      this.types = data;
      this.type = new InsuranceType();
    });
  }

  add() {
    this.typeService.addType(this.type).subscribe(() => {
      this.load();
    });
  }

  update(type: InsuranceType) {
    this.typeToUpdate = type;
  }

  save() {
    if (this.typeToUpdate.name !== '' && this.typeToUpdate.agentPercent > 0
    && this.typeToUpdate.agentPercent > 0) {
      this.typeService.updateType(this.typeToUpdate).subscribe(() => {
        this.load();
        this.typeToUpdate = null;
      });
    }
  }

  delete(id: any) {
    this.typeService.deleteType(id).subscribe(() => {
      this.load();
    });
  }

  find() {
    this.typeService.find(this.field, this.value).subscribe(data => {
      this.types = data;
    });
  }

}
