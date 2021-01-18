import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hardwares } from './hardware';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  titles = ["ID", "Date", "Temp", "Usage", "Memory"];

  headers = ["hardware_id", "created_time", "cpu_temp", "cpu_usage", "memory"];

  received: Hardwares;

  constructor(private apiService: ApiService) {
    this.received = new Hardwares();
  }
  
  ngOnInit(): void {
    this.apiService.getHardwares().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}

}
