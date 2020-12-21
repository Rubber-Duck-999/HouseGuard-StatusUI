import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlarmEvent } from '../alarm-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
