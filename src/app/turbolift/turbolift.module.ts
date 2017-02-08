import { SharedModule } from './../shared/shared.module';
import { HangarBayModule } from './hangar-bay/hangar-bay.module';
import { CommandCenterModule } from './command-center/command-center.module';
import { NgModule } from '@angular/core';
import { TurboliftRoutingModule } from './turbolift-routing.module';
import { TurboliftComponent } from './turbolift.component';
import { MessHallComponent } from './mess-hall/mess-hall.component';
import { RecRoomComponent } from './rec-room/rec-room.component';

@NgModule({
  imports: [
    SharedModule,
    TurboliftRoutingModule,
    CommandCenterModule,
    HangarBayModule
  ],
  declarations: [TurboliftComponent, MessHallComponent, RecRoomComponent],
  exports: [TurboliftComponent]
})
export class TurboliftModule { }
