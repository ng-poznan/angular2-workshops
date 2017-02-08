import { SecurityService } from './../../core/security/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-hangar-bay',
  templateUrl: './hangar-bay.component.html',
  styleUrls: ['./hangar-bay.component.scss']
})
export class HangarBayComponent implements OnInit {

  constructor(private security: SecurityService) { }

  public setAlarm() {
    this.security.setAlarm(!this.security.alarmOn);
  }

  ngOnInit() {
  }

}
