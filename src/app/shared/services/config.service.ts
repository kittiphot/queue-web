import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getTemp() {
    // return this.httpClient.get(`${API_URL}/temp`);
    return this.http.get(`http://localhost:9000/staff`);
    
  }
}