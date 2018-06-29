import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardComponent, TaskComponent],
  exports: [BoardComponent]
})
export class StepboardModule { }
