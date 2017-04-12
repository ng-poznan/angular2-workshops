import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class CanActivateControlPanel implements CanActivate {
  constructor(private authorizationServ: AuthorizationService) {}

  canActivate() {
    return this.authorizationServ.isAuthorized();
  }
}
