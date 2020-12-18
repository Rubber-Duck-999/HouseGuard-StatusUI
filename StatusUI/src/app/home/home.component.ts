import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse, JsonpClientBackend } from '@angular/common/http';
import { AlarmEvent } from '../alarm-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: AlarmEvent[] = [];

  titles = ["ID", "User", "State", "Date"];

  headers = ["event_id", "user", "state", "created_time"];

  constructor(private apiService: ApiService) { 
  }
  
  ngOnInit(): void {
    this.apiService.sendGetRequest().subscribe((data: AlarmEvent[]) => {
      this.events = JSON.parse(data.toString());
      for(var event of this.events) {
        console.log(event)
      }
      console.log(this.events);
    })
	}

}
