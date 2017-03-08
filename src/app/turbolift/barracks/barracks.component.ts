import { Component, OnInit } from '@angular/core';
import { stormtroopers } from './data';

@Component({
  selector: 'ds-barracks',
  templateUrl: './barracks.component.html',
  styleUrls: ['./barracks.component.scss']
})
export class BarracksComponent implements OnInit {
  public stormtroopers = stormtroopers;
  public saidValue = '';

  constructor() { }

  ngOnInit() {
  }

  onSaySomething(val) {
    this.saidValue = val;
  }

}
