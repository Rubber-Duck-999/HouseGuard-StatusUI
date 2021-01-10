import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Statuses } from './status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  titles = ["ID", "Created Date", "Motion Detected", "Access Granted", "Access Denied",
            "Last Fault", "Last User", "CPU Temperature", "CPU Usage", "Memory Left"];

  headers = ["status_id", "created_date", "motion_detected", "access_granted", "access_denied", 
             "last_fault", "last_user", "cpu_temp", "cpu_usage", "memory"];

  received: Statuses;

  constructor(private apiService: ApiService) {
    this.received = new Statuses();
  }
  
  ngOnInit(): void {
    this.apiService.getStatus().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}

}
