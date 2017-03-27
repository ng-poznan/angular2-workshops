import { NgModule } from '@angular/core';

import { API_URL } from './tokens/core.tokens';
import { PlanetsService } from './services/planets.service';

@NgModule({
  declarations: [],
  imports:  [],
  exports: [],
  providers: [
    PlanetsService,
    { provide: API_URL, useValue: 'http://swapi.co/api' }
  ],
})
export class CoreModule {}
