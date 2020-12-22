import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DailyStatus } from './daily-status';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.css']
})
export class DailyStatusComponent implements OnInit {

  titles = ["ID", "User", "State", "Date"];

  headers = ["event_id", "user", "state", "created_time"];

  received: DailyStatus;

  constructor(private apiService: ApiService) {
    this.received = new DailyStatus();
  }
  
  ngOnInit(): void {
    this.apiService.getDailyStatus().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}
}
