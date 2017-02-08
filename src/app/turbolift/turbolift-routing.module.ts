import { HangarBayComponent } from './hangar-bay/hangar-bay.component';
import { CommandCenterComponent } from './command-center/command-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'center',
    component: CommandCenterComponent
  },
  {
    path: 'hangar',
    component: HangarBayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TurboliftRoutingModule { }
