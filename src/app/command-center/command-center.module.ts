import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCenterRoutingModule } from './command-center-routing.module';
import { CommandCenterComponent } from './command-center.component';

@NgModule({
  imports: [
    CommonModule,
    CommandCenterRoutingModule
  ],
  declarations: [CommandCenterComponent]
})
export class CommandCenterModule { }
