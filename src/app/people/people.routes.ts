import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PeopleComponent }
];

export default RouterModule.forChild(routes);
