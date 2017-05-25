import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracksRoutingModule } from './barracks-routing.module';
import { BarracksComponent } from './barracks.component';
import { StormtrooperComponent } from './stormtrooper/stormtrooper.component';
import { JangoComponent } from './jango/jango.component';
import { BadgeComponent } from './badge/badge.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BarracksRoutingModule,
    FormsModule,
  ],
  declarations: [
    BarracksComponent,
    StormtrooperComponent,
    JangoComponent,
    BadgeComponent,
  ]
})
export class BarracksModule { }
