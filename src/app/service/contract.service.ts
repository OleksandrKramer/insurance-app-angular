import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  baseUrl = 'https://insurance-company-app.herokuapp.com/api/contract';

  constructor(private http: HttpClient) { }


  getContrats() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  addContract(contract: Contract) {
    return this.http.post(`${this.baseUrl}/add`, contract);
  }

  updateContract(contract: Contract) {
    return this.http.post(`${this.baseUrl}/update`, contract);
  }

  deleteContract(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }



}
