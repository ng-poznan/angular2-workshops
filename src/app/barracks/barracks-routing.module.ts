import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarracksComponent } from './barracks.component';

const livignQuartersRoutes: Routes = [
  {
    path: 'barracks',
    component: BarracksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(livignQuartersRoutes)],
  exports: [RouterModule]
})
export class BarracksRoutingModule { }
