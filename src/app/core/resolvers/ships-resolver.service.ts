import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ShipsService } from '../services/ships.service';

@Injectable()
export class ShipsResolver implements Resolve<any> {
  constructor(private shipsServ: ShipsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.shipsServ.getShips(route.params['type']);
  }
}
