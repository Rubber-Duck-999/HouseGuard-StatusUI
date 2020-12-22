import { Component, OnInit } from '@angular/core';
import { AlarmEvent } from './alarm-event';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-alarm-event',
  templateUrl: './alarm-event.component.html',
  styleUrls: ['./alarm-event.component.css']
})
export class AlarmEventComponent implements OnInit {

  titles = ["ID", "User", "State", "Date"];

  headers = ["event_id", "user", "state", "created_time"];

  received: AlarmEvent;

  constructor(private apiService: ApiService) {
    this.received = new AlarmEvent();
  }
  
  ngOnInit(): void {
    this.apiService.getAlarmEvent().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}

}
