import { CommandCenterModule } from './command-center/command-center.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurboliftRoutingModule } from './turbolift-routing.module';
import { TurboliftComponent } from './turbolift.component';

@NgModule({
  imports: [
    CommonModule,
    TurboliftRoutingModule,
    CommandCenterModule
  ],
  declarations: [TurboliftComponent],
  exports: [TurboliftComponent]
})
export class TurboliftModule { }
