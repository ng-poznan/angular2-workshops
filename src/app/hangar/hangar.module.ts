import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarRoutingModule } from './hangar-routing.module';
import { HangarComponent } from './hangar.component';
import { ShipsComponent } from './ships/ships.component';
import { HangarMenuComponent } from './hangar-menu/hangar-menu.component';

@NgModule({
  imports: [
    CommonModule,
    HangarRoutingModule
  ],
  declarations: [HangarComponent, ShipsComponent, HangarMenuComponent]
})
export class HangarModule { }
