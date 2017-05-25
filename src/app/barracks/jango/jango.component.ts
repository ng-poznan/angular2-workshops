import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'ds-jango',
  templateUrl: './jango.component.html',
  styleUrls: ['./jango.component.scss']
})
export class JangoComponent implements OnChanges, DoCheck {

  constructor() { }

  ngOnChanges(changes) {
    console.log('Jango changed', changes);
  }
  ngDoCheck() {
    console.log('Jango check');
  }
}
