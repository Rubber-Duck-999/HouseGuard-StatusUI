import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlarmEvent } from './alarm-event/alarm-event';
import { Faults } from './faults/faults';
import { Hardwares } from './hardware/hardware';
import { Accesses } from './access/access';
import { Motions } from './motion/motion';
import { Devices } from './device/devices';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "https://b2o354de95.execute-api.eu-west-2.amazonaws.com/stage/";
  private EVENT_URL = this.BASE_URL + "alarmEvent";
  private MOTION_URL = this.BASE_URL + "motion";
  private ACCESS_URL = this.BASE_URL + "access";
  private FAULT_URL = this.BASE_URL + "fault";
  private HARDWARE_URL = this.BASE_URL + "hardware";
  private DEVICE_URL = this.BASE_URL + "device";

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

  public getFault(): Observable<Faults> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Faults>(this.FAULT_URL);
  }

  public getHardwares(): Observable<Hardwares> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Hardwares>(this.HARDWARE_URL);
  }

  public getAccess(): Observable<Accesses> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Accesses>(this.ACCESS_URL);
  }

  public getMotions(): Observable<Motions> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Motions>(this.MOTION_URL);
  }

  public getDevice(): Observable<Devices> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-control': 'no-cache'
      })};
    return this.httpClient.get<Devices>(this.DEVICE_URL);
  }
}
