import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurboliftComponent } from './turbolift.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TurboliftComponent],
  exports: [TurboliftComponent]
})
export class TurboliftModule { }
