import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteplistComponent } from './steplist/steplist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SteplistComponent],
  exports: [SteplistComponent]
})
export class SteplistModule { }
