import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { Stormtrooper } from '../stormtrooper.model';


@Component({
  selector: 'ds-stormtrooper',
  templateUrl: './stormtrooper.component.html',
  styleUrls: ['../jango/jango.component.scss']
})
export class StormtrooperComponent implements OnChanges, DoCheck {
  @Input() stormtrooper: Stormtrooper;
  constructor() { }

  ngOnChanges(changes) {
    console.log('Stormtrooper changed', changes);
  }
  ngDoCheck() {
    console.log('Stormtrooper check');
  }
}
