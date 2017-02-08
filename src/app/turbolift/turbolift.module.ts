import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurboliftRoutingModule } from './turbolift-routing.module';
import { TurboliftComponent } from './turbolift.component';

@NgModule({
  imports: [
    CommonModule,
    TurboliftRoutingModule
  ],
  declarations: [TurboliftComponent],
  exports: [TurboliftComponent]
})
export class TurboliftModule { }
