import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
  public alarmOn = false;

  constructor() { }

  public setAlarm(value: boolean): void {
    this.alarmOn = value;
  }

}
