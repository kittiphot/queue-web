import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }

  getTemp() {
    return this.http.get(`${API_URL}/temp`);
    // return this.http.get(`http://localhost:8000/temp`);
  }

  getList() {
    return this.http.get(`${API_URL}/list`);
    // return this.http.get(`http://localhost:8000/list`);
  }

  createQueue() {
    return this.http.get(`${API_URL}/list/create`);
    // return this.http.get(`http://localhost:8000/list/create`);
  }

  callQueue() {
    return this.http.get(`${API_URL}/list/edit`);
    // return this.http.get(`http://localhost:8000/list/edit`);
  }
}