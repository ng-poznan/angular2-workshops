import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandCenterComponent } from './command-center.component';

const commandCenterRoutes: Routes = [
  {
    path: 'command-center',
    component: CommandCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(commandCenterRoutes)],
  exports: [RouterModule]
})
export class CommandCenterRoutingModule { }
