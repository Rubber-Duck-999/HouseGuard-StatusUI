import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DailyStatus } from '../daily-status/daily-status';
import { Statuses } from './status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

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
