import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getStaff() {
    return this.http.get(`${API_URL}/staff`);
<<<<<<< HEAD
  }
  getServicebox() {
    return this.http.get(`${API_URL}/servicebox`);
=======
>>>>>>> 4c807f8ea2b0a21f381e614cfece7631235387c2
  }
}