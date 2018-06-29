import { Component, OnInit } from '@angular/core';
import { ClockService } from './_services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  today: number;

  constructor(private clockService: ClockService) {
    this.today = Date.now();
  }

  ngOnInit() {
    this.clockService.getClock().subscribe(time => {
      this.today = Date.now();
    });
  }

}
