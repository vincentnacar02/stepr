import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../_models/all.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  @Output() completed: EventEmitter<Task>;

  constructor() { 
    this.completed = new EventEmitter<Task>();
  }

  ngOnInit() {

  }

  markCompleted() {
    this.task.isCompleted = true;
    this.completed.emit(this.task);
  }

}
