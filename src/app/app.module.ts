import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SteplistModule } from './steplist/steplist.module';
import { StepboardModule } from './stepboard/stepboard.module';
import { UploadstepModule } from './uploadstep/uploadstep.module';

import { StepsService } from './_services/steps.service';
import { ClockService } from './_services/clock.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SteplistModule,
    StepboardModule,
    UploadstepModule
  ],
  providers: [StepsService, ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
