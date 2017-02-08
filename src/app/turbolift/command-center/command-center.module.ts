import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommandCenterComponent } from './command-center.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CommandCenterComponent],
  exports: [CommandCenterComponent]
})
export class CommandCenterModule { }
