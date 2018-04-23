import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class DateTimeService {
  constructor(private http: HttpClient) { }

  getDate() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/date`)
    )
  }

  getTime() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/time`)
    )
  }
}