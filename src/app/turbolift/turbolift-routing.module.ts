import { RecRoomComponent } from './rec-room/rec-room.component';
import { MessHallComponent } from './mess-hall/mess-hall.component';
import { HangarBayComponent } from './hangar-bay/hangar-bay.component';
import { CommandCenterComponent } from './command-center/command-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'center',
    loadChildren: 'app/turbolift/command-center/command-center.module#CommandCenterModule'
  },
  {
    path: 'hangar',
    component: HangarBayComponent
  },
  {
    path: 'mess',
    component: MessHallComponent
  },
  {
    path: 'rec',
    component: RecRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TurboliftRoutingModule { }
