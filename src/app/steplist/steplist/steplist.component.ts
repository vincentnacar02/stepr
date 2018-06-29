import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../_services/steps.service';
import { Observable } from 'rxjs';

import { Step } from '../../_models/all.model';

@Component({
  selector: 'app-steplist',
  templateUrl: './steplist.component.html',
  styleUrls: ['./steplist.component.css']
})
export class SteplistComponent implements OnInit {

  steps$ : Observable<Step[]>;

  constructor(private stepService: StepsService) { }

  ngOnInit() {
    this.steps$ = this.stepService.fetch();
    this.steps$.subscribe(data => {
      console.log(data);
    });
  }

}
