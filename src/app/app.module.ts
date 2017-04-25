import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobModule } from './job/job.module';
import { HangarModule } from './hangar/hangar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    JobModule,
    HangarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
