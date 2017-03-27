import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'people', loadChildren: 'app/people/people.module' },
  { path: 'planets', component: PlanetsComponent}
];

export default RouterModule.forRoot(routes);
