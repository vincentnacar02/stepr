import { Component, OnInit } from '@angular/core';
import { ClockService } from './_services/clock.service';
import { StepsService } from './_services/steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  today: number;

  constructor(
    private clockService: ClockService, 
    private stepService: StepsService) {
    this.today = Date.now();
  }

  ngOnInit() {
    this.clockService.getClock().subscribe(time => {
      this.today = Date.now();
    });
  }

  about() {
    this.stepService.select(null);
  }

}
