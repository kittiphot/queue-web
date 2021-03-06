import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }
  getCountQueueDayInMount(){
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/queue_day_in_month`)
    )
  }
  getCountQueuehour(){
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/queue_in_hour`)
    )
  }
  getCountListAllDay(){
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/all_queue_today`)
    )
  }
  getCountTodoInList() {
    return Observable.interval(1250).flatMap((i) =>
      this.http.get(`${API_URL}/todo_temp`)
    )
  }
  getTemp() {
    return Observable.interval(1250).flatMap((i) =>
      this.http.get(`${API_URL}/temp`)
    )
  }

  getCurrentQueueByIdServiceBox($id) {
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/temp/` + $id)
    )
  }

  getCurrentQueue() {
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/currentQueue`)
    )
  }

  getList() {
    return this.http.get(`${API_URL}/list`);
  }

  getListCount() {
    return Observable.interval(1250).flatMap((i) =>
      this.http.get(`${API_URL}/list/count`)
    )
  }

  createQueue() {
    return this.http.get(`${API_URL}/list/create`);
  }

  repeatQueueCall ($id) {
    return this.http.get(`${API_URL}/temp/repeat/` + $id);
  }

  callQueue(params) {
    return this.http.post(`${API_URL}/list/edit`, params);
  }

   getleftQueue($queue){
    return Observable.interval(1250).flatMap((i) =>
    this.http.get(`${API_URL}/queue/left/` + $queue))
   }
}