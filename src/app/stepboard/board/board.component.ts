import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../_services/steps.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Step, Task } from '../../_models/all.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private selected$: Observable<Step>;
  private tasks: Task[];
  step: Step;
  private progress: number = 0;

  constructor(private stepService: StepsService) { }

  ngOnInit() {
    this.selected$ = this.stepService.onSelectChanged();
    this.selected$.subscribe(data => {
      this.step = data;
      this.tasks = this.step ? this.step.stepTask : [];
      this.calculateProgress();
      console.log(data);
    });
  }

  calculateProgress() {
    this.progress = 0;
    if (this.tasks && this.tasks.length > 0) {
      let taskCompleted: number = 0;
      this.tasks.forEach(task => {
        
        if (task.isCompleted) {
          ++taskCompleted;
        }
        console.log({taskCompleted});
        if (taskCompleted > 0) {
          this.progress = (100 / this.tasks.length) * taskCompleted;
        } else {
          this.progress = 0;
        }
        console.log(this.progress);
      });
    }
  }

  getNextStep(cur: number) {
    var next = ++cur;
    console.log(next);
    this.stepService.getStep(next).subscribe(data => {
      if (data && data.length > 0) {
        this.stepService.select(data[0]);
      }
    });
  }

  getPreviousStep(cur: number) {
    var next = --cur;
    console.log(next);
    this.stepService.getStep(next).subscribe(data => {
      if (data && data.length > 0) {
        this.stepService.select(data[0]);
      }
    });
  }

}
