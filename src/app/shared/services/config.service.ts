import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getStaff() {
    return this.http.get(`${API_URL}/staff`);
  }
  getServicebox() {
    return this.http.get(`${API_URL}/servicebox`);
  }
  getServiceboxById(id){
    return this.http.get(`${API_URL}/servicebox_by_id/${id}`);
  }
  setServiceboxx(params, status) {
    return this.http.post(`${API_URL}/servicebox/${status}`, params);
  }


}