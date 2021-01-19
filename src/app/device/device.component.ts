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

  titles = ["ID", "Date", "Allowed", "Blocked", "Unknown"];

  headers = ["device_id", "created_date", "allowed_devices", "blocked_devices", "unknown_devices"];

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
