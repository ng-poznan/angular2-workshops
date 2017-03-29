import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    CoreModule,
    PlanetsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
