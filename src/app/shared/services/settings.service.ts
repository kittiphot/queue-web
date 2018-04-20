import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  getSettings() {
    // return this.http.get(`${API_URL}/config`);
    return this.http.get(`http://localhost:8000/config`);
  }

  getTest() {
    return Observable.interval(5000).flatMap((i) =>
      this.http.get(`http://localhost:8000/config`)
    )
  }

  getLastQueue() {
    return this.http.get(`http://localhost:8000/last`)
  }
}