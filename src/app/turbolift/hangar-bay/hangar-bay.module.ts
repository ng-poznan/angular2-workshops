import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarBayComponent } from './hangar-bay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HangarBayComponent],
  exports: [HangarBayComponent]
})
export class HangarBayModule { }
