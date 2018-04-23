import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }
  getCountTodoInList() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/todo_temp`)
      // return this.http.get(`http://localhost:8000/temp`);
    )
  }
  getTemp() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/temp`)
    )
  }

  getCurrentQueue($id) {
    return Observable.interval(1000).flatMap((i) =>
    this.http.get(`${API_URL}/temp/` + $id)
    )
  }

  getList() {
    return this.http.get(`${API_URL}/list`);
  }

  getListCount() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/list/count`)
    )
  }

  createQueue() {
    return this.http.get(`${API_URL}/list/create`);
  }

  callQueue(params) {
    return this.http.post(`${API_URL}/list/edit`, params);
  }
}