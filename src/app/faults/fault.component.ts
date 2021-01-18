import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Faults } from './faults';

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css']
})
export class FaultComponent implements OnInit {

  titles = ["ID", "Date", "Name"];

  headers = ["fault_id", "created_time", "name"];

  received: Faults;

  constructor(private apiService: ApiService) {
    this.received = new Faults();
  }
  
  ngOnInit(): void {
    this.apiService.getFault().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}
}
