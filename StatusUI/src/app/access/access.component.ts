import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Access, Accesses } from './access';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  titles = ["ID", "Date", "Granted", "Denied", "User"];

  headers = ["fault_id", "created_date", "access_granted", "access_denied", "last_user"];

  received: Accesses;

  constructor(private apiService: ApiService) {
    this.received = new Accesses();
  }
  
  ngOnInit(): void {
    this.apiService.getAccess().subscribe(res => {
      this.received = res;
      console.log(this.received)
    })
	}

}
