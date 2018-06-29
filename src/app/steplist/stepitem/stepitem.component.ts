import { Component, OnInit, Input } from '@angular/core';
import { StepsService } from '../../_services/steps.service';
import { Observable } from 'rxjs';
import { Step } from '../../_models/all.model';

@Component({
  selector: 'app-stepitem',
  templateUrl: './stepitem.component.html',
  styleUrls: ['./stepitem.component.css']
})
export class StepitemComponent implements OnInit {

  selectedStep: Step;
  selected$ : Observable<Step>;
  @Input() item: Step;

  constructor(private stepService: StepsService) { }

  ngOnInit() {
    this.selected$ = this.stepService.onSelectChanged();
    this.selected$.subscribe(data => {
      console.log(data);
      this.selectedStep = data;
    });
  }

  select(step: Step) {
    this.stepService.select(step);
  }

}
