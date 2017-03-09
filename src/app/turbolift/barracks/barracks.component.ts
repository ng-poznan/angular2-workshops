import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges } from '@angular/core';
import { stormtroopers } from './data';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ds-barracks',
  templateUrl: './barracks.component.html',
  styleUrls: ['./barracks.component.scss']
})
export class BarracksComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  public index = 0;
  public stormtrooper = stormtroopers[this.index];
  public stringValue = 'Empire!!!';

  constructor() { }

  ngOnChanges() {
    console.log('Barracks: OnChanges');
  }

  ngOnInit() {
    console.log('Barracks: OnInit');

    setTimeout(() => {
      this.stringValue = 'Empire!';
      console.log('Barracks setTimeout called');
    }, 2000);
  }

  ngAfterViewInit() {
    console.log('Barracks: AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Barracks: AfterViewChecked');
  }

  assignNewStormtrooper() {
    this.index = this.index === stormtroopers.length - 1 ? 0 : this.index + 1;
    this.stormtrooper = stormtroopers[this.index];
  }

}
