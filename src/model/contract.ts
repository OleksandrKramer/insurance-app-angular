import {Filiation} from './filiation';
import {InsuranceType} from './insuranceType';
import {Agent} from './agent';

export class Contract {
  id: any;
  date: string;
  amountPay: number;
  baseTaryfPay: number;
  filiation: any;
  insuranceType: any;
  agent: any;


  constructor() {
    this.filiation = new Filiation();
    this.agent = new Agent();
    this.insuranceType = new InsuranceType();
  }
}
