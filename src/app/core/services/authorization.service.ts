import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  private isVader = false;

  constructor() { }

  public isAuthorized() {
    return this.isVader;
  }

  public toggleAuthorization() {
    this.isVader = !this.isVader;
  }
}
