import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivingQuartersComponent } from './living-quarters.component';

const livignQuartersRoutes: Routes = [
  {
    path: 'living-quarters',
    component: LivingQuartersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(livignQuartersRoutes)],
  exports: [RouterModule]
})
export class LivingQuartersRoutingModule { }
