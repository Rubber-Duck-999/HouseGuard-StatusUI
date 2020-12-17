import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { AlarmEvent } from '../alarm-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: AlarmEvent;

  constructor(private apiService: ApiService) { 
    this.event = new AlarmEvent();
    this.event.user = "Begin";
  }
  
  ngOnInit() {
		this.apiService.sendGetRequest().subscribe((data: any)=>{  
      console.log(data);
      this.event = data;
		})  
	}

}
