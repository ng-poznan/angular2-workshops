import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

@Component({
  selector: 'ds-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public people$: Observable<any[]>;

  constructor() { }

  ngOnInit() {
    this.people$ = Observable.of([
      { name: 'Person A', height: '250', mass: '180' },
      { name: 'Person B', height: '25', mass: '18' },
      { name: 'Person C', height: '150', mass: '100' }
    ]);
  }

}
