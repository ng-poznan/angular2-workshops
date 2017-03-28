import { PeopleService } from './people.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleComponent } from './people.component';
import { peopleRoutes } from './people.routes';

@NgModule({
  declarations: [ PeopleComponent ],
  imports: [ peopleRoutes, CommonModule ],
  exports: [],
  providers: [ PeopleService ],
})
export class PeopleModule {}
