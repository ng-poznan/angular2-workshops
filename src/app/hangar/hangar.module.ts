import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarRoutingModule } from './hangar-routing.module';
import { HangarComponent } from './hangar.component';

@NgModule({
  imports: [
    CommonModule,
    HangarRoutingModule
  ],
  declarations: [HangarComponent]
})
export class HangarModule { }
