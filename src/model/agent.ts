import {Filiation} from './filiation';

export class Agent {
  id: any;
  surname: string;
  firstname: string;
  patronymic: string;
  address: string;
  phone: string;
  filiation: any;


  constructor() {
    this.filiation = new Filiation();
  }
}
