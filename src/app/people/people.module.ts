import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { peopleRoutes } from './people.routes';
import { PeopleComponent } from './people.component';

@NgModule({
  imports: [ CommonModule, peopleRoutes ],
  declarations: [ PeopleComponent ],
  providers: []
})
export class PeopleModule { }
