import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InsuranceType} from '../model/insuranceType';

@Injectable({
  providedIn: 'root'
})
export class InsuranceTypeService {

  baseUrl = 'https://insurance-company-app.herokuapp.com/api/insurancetype';

  constructor(private http: HttpClient) { }


  getType() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  addType(type: InsuranceType) {
    return this.http.post(`${this.baseUrl}/add`, type);
  }

  updateType(type: InsuranceType) {
    return this.http.post(`${this.baseUrl}/update`, type);
  }

  deleteType(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }

}
