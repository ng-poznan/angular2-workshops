import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessHallComponent } from './mess-hall.component';

const messHallRoutes: Routes = [
  {
    path: 'mess-hall',
    component: MessHallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(messHallRoutes)],
  exports: [RouterModule]
})
export class MessHallRoutingModule { }
