import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { HangarComponent } from './hangar/hangar.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'job',
    component: JobComponent
  },
  {
    path: 'hangar',
    component: HangarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
