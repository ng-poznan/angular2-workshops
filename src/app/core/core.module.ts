import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './services/users.service';
import { MissingMapService, MissingMapFactory } from './services/missing-map.service';
import { PlanetsService } from './services/planets.service';
import { API_URL } from './tokens/core.tokens';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    PlanetsService,
    UsersService,
    {
      provide: API_URL,
      useValue: 'http://swapi.co/api'
    },
    {
      provide: MissingMapService,
      useFactory: MissingMapFactory,
      deps: [ UsersService ]
    }
  ]
})
export class CoreModule { }
