import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCenterRoutingModule } from './command-center-routing.module';
import { CommandCenterComponent } from './command-center.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CommandCenterDescComponent } from './command-center-desc/command-center-desc.component';

@NgModule({
  imports: [
    CommonModule,
    CommandCenterRoutingModule
  ],
  declarations: [CommandCenterComponent, ControlPanelComponent, CommandCenterDescComponent]
})
export class CommandCenterModule { }
