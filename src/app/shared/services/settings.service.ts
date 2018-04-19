import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  getSettings() {
    // return this.http.get(`${API_URL}/config`);
    return this.http.get(`http://localhost:8000/config`);
  }
}