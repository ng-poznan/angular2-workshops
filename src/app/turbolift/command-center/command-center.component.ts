import { SecurityService } from './../../core/security/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-command-center',
  templateUrl: './command-center.component.html',
  styleUrls: ['./command-center.component.scss']
})
export class CommandCenterComponent implements OnInit {

    constructor(private security: SecurityService) { }

  ngOnInit() {
  }

}
