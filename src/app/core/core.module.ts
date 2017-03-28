import { NgModule } from '@angular/core';

import { API_URL } from './tokens/core.tokens';
import { PlanetsService } from './services/planets.service';
import { UsersService } from './services/users.service';
import { MissingMapService, MissingMapFactory } from './services/missing-map.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    PlanetsService,
    UsersService,
    {
      provide: API_URL,
      useValue: 'http://swapi.co/api'
    },
    {
      provide: MissingMapService,
      deps: [ UsersService ],
      useFactory: MissingMapFactory
    }
  ],
})
export class CoreModule {}
