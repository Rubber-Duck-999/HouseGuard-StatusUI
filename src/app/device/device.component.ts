import { Component, OnInit } from '@angular/core';
import { Accesses } from '../access/access';
import { ApiService } from '../api.service';
import { Devices } from './devices';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  titles = ["ID", "Date", "Motion", "Granted", "Denied", "User"];

  headers = ["device_id", "created_date", "motion_detected", "access_granted", "access_denied", "last_user"];

  received: Devices;

  constructor(private apiService: ApiService) {
    this.received = new Devices();
  }
  
  ngOnInit(): void {
    this.apiService.getDevice().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}
}
