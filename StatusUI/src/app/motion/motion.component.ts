import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Motions } from './motion';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export class MotionComponent implements OnInit {

  titles = ["ID", "Date"];

  headers = ["motion_id", "created_date"];

  received: Motions;

  constructor(private apiService: ApiService) {
    this.received = new Motions();
  }
  
  ngOnInit(): void {
    this.apiService.getMotions().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}
}
