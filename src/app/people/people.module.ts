import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { peopleRoutes } from './people.routes';
import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';

@NgModule({
  imports: [ CommonModule, peopleRoutes ],
  declarations: [ PeopleComponent ],
  providers: [ PeopleService ]
})
export class PeopleModule { }
