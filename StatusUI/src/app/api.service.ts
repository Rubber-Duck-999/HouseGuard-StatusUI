import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlarmEvent } from './alarm-event/alarm-event';
import { DailyStatus } from './daily-status/daily-status';
import { Statuses } from './status/status';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private EVENT_URL = "https://9p0rr7ytga.execute-api.eu-west-2.amazonaws.com/dev/alarmEvent";
  private STATUS_URL = "https://9p0rr7ytga.execute-api.eu-west-2.amazonaws.com/dev/status";
  private DAILY_URL = "https://9p0rr7ytga.execute-api.eu-west-2.amazonaws.com/dev/dailyStatus";
  private LOCAL_URL = "http://localhost:6649";

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
    return this.httpClient.get<AlarmEvent>(this.EVENT_URL);
  }

  public getStatus(): Observable<Statuses> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Statuses>(this.STATUS_URL);
  }

  public getDailyStatus(): Observable<DailyStatus> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<DailyStatus>(this.DAILY_URL);
  }
}
