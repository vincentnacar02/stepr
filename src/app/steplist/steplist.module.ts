import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteplistComponent } from './steplist/steplist.component';
import { StepitemComponent } from './stepitem/stepitem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SteplistComponent, StepitemComponent],
  exports: [SteplistComponent]
})
export class SteplistModule { }
