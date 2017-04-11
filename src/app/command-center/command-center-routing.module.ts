import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandCenterComponent } from './command-center.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CommandCenterDescComponent } from './command-center-desc/command-center-desc.component';

const commandCenterRoutes: Routes = [
  {
    path: 'command-center',
    component: CommandCenterComponent,
    children: [
      {
        path: '',
        component: CommandCenterDescComponent
      },
      {
        path: 'control-panel',
        component: ControlPanelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(commandCenterRoutes)],
  exports: [RouterModule]
})
export class CommandCenterRoutingModule { }
