import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsService } from './services/planets.service';
import { API_URL } from './tokens/core.tokens';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PlanetsService,
    { provide: API_URL, useValue: 'http://swapi.co/api' }
  ]
})
export class CoreModule { }
