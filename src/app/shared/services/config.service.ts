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
  getServiceboxById(id){
    return this.http.get(`${API_URL}/servicebox_by_id/${id}`);
  }
  deleteStaff(id){
    return this.http.put(`${API_URL}/staff/delete/`,id);
  }
  setServicebox2(params, status) {
    return this.http.post(`${API_URL}/servicebox/${status}`, params);
  }
  // setServicebox(params, status) {
  //   console.log("POST");
  //   let url = this.http.post(`${API_URL}/servicebox/${status}`);
  //   this.http.post(url,params ).subscribe(res => console.log(res.json()));
  // }
  


}