import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class AuthenService {
  constructor(private http: HttpClient) { }

  getAuthen(params) {
    return this.http.post(`${API_URL}/authen`, params);
  }

  setLogged(params) {
    return this.http.post(`${API_URL}/logged`, params);
  }
}