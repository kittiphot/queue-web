import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }

  getTemp() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/temp`)
      // return this.http.get(`http://localhost:8000/temp`);
    )
  }

  getCurrentQueue($id) {
    return this.http.get(`${API_URL}/temp/` + $id);
    // return this.http.get(`http://localhost:8000/temp/` + $id);
  }

  getList() {
    return this.http.get(`${API_URL}/list`);
    // return this.http.get(`http://localhost:8000/list`);
  }

  getListCount() {
    return this.http.get(`${API_URL}/list/count`);
    // return this.http.get(`http://localhost:8000/list/count`);
  }

  createQueue() {
    return this.http.get(`${API_URL}/list/create`);
    // return this.http.get(`http://localhost:8000/list/create`);
  }

  callQueue() {
    return this.http.get(`${API_URL}/list/edit`);
    // return this.http.get(`http://localhost:8000/list/edit`);
  }

   getleftQueue($queue){
    return Observable.interval(1000).flatMap((i) =>
    this.http.get(`${API_URL}/queue/left/` + $queue))
   }
}