import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getStaff() {
    return this.http.get(`${API_URL}/staff`);
  }

  findStaff(id) {
    return this.http.get(`${API_URL}/staff/${id}`);
  }

  // setEditstaff(data){
  //   return this.http.put(`${API_URL}/staff/edit`, data);
  // }

  getServicebox() {
    return this.http.get(`${API_URL}/servicebox`);
  }
}