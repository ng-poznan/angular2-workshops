import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar.component';
import { ShipsComponent } from './ships/ships.component';
import { ShipsResolver } from '../core/resolvers/ships-resolver.service';

const hangarRoutes: Routes = [
  {
    path: 'hangar',
    component: HangarComponent,
    children: [
      {
        path: 'ships',
        component: ShipsComponent,
        resolve: {
          ships: ShipsResolver
        }
      },
      {
        path: 'ships/:type',
        component: ShipsComponent,
        resolve: {
          ships: ShipsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(hangarRoutes)],
  exports: [RouterModule]
})
export class HangarRoutingModule { }
