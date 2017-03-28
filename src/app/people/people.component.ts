import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

import { PeopleService } from './people.service';
import { MissingMapService } from './../core/services/missing-map.service';

@Component({
  selector: 'ds-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public people$: Observable<any[]>;

  constructor(private peopleServ: PeopleService, private missingMapServ: MissingMapService) {}

  ngOnInit() {
    this.people$ = this.peopleServ.getPeople();

    console.warn(this.missingMapServ.askForMissingPiece());
  }
}
