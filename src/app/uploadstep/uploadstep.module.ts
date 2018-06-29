import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UploadComponent],
  exports: [UploadComponent]
})
export class UploadstepModule { }
