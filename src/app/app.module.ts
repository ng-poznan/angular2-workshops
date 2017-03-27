import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    PlanetsModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
