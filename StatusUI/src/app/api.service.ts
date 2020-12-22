import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlarmEvent } from './alarm-event/alarm-event';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:5000/alarmEvent";


  constructor(private httpClient: HttpClient) { };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getAlarmEvent(): Observable<AlarmEvent> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<AlarmEvent>(this.SERVER_URL);
  }

  public getStatus(): Observable<AlarmEvent> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<AlarmEvent>(this.SERVER_URL);
  }

  public getDailyStatus(): Observable<AlarmEvent> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<AlarmEvent>(this.SERVER_URL);
  }
}
