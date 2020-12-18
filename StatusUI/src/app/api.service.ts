import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:5000/alarmEvent";


  constructor(private httpClient: HttpClient) { };

  public sendGetRequest(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get(this.SERVER_URL);
  }
}
