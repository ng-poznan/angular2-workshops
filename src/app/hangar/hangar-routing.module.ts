import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar.component';
// import { ShipsComponent } from './ships/ships.component';

const hangarRoutes: Routes = [
  {
    path: 'hangar',
    component: HangarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(hangarRoutes)],
  exports: [RouterModule]
})
export class HangarRoutingModule { }
