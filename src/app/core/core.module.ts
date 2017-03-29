import { PlanetsComponent } from './../planets/planets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsService } from './services/planets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ PlanetsService ]
})
export class CoreModule { }
