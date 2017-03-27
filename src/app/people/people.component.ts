import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PeopleService } from './people.service';

@Component({
  selector: 'ds-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public people$ : Observable<any[]>;

  constructor(private peopleServ: PeopleService) {}

  ngOnInit() {
    this.people$ = this.peopleServ.getPeople();
  }
}
