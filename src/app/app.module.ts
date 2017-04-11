import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { TurboliftModule } from './turbolift/turbolift.module';
import { MessHallModule } from './mess-hall/mess-hall.module';
import { LivingQuartersModule } from './living-quarters/living-quarters.module';
import { HangarModule } from './hangar/hangar.module';
import { CommandCenterModule } from './command-center/command-center.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    TurboliftModule,
    MessHallModule,
    LivingQuartersModule,
    HangarModule,
    CommandCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
