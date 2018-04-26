import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  getSettings() {
    return Observable.interval(1000).flatMap((i) =>
      this.http.get(`${API_URL}/config`)
    )
  }

  getResetQueue() {
    return this.http.get(`${API_URL}/resetQueue`);
  }

  setQueueFormat(param) {
    return this.http.post(`${API_URL}/editQueueFormat`, param);
  }

  getLastQueue() {
    return this.http.get(`${API_URL}/last`);
  }

  getShowSettings() {
    return this.http.get(`${API_URL}/settings`);
  }

  getShowSettingsByStatus() {
    return this.http.get(`${API_URL}/settings_by_status`);
  }

  setShowSettings(params) {
    return this.http.post(`${API_URL}/edit_settings`, params);
  }

  getScreen() {
    return this.http.get(`${API_URL}/screen`);
  }

  getUserScreen() {
    return this.http.get(`${API_URL}/userScreen`);
  }

  setScreen(params) {
    return this.http.post(`${API_URL}/edit_Screen`, params);
  }
}