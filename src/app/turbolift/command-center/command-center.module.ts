import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCenterComponent } from './command-center.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommandCenterComponent],
  exports: [CommandCenterComponent]
})
export class CommandCenterModule { }
