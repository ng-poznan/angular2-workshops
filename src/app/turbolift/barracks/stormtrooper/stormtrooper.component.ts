import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'ds-stormtrooper',
  templateUrl: './stormtrooper.component.html',
  styleUrls: ['./stormtrooper.component.scss']
})
export class StormtrooperComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() value;
  public inHelmet = true;

  constructor() { }

  ngOnInit() {
    console.log('Stormtrooper: OnInit');

    setTimeout(() => {
      this.inHelmet = false;
      console.log('Stormtrooper setTimeout called');
    }, 4000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Stormtrooper: OnChanges', changes);
  }

  ngDoCheck() {
    console.log('Stormtrooper: DoCheck');
  }

  ngAfterContentInit() {
    console.log('Stormtrooper: AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Stormtrooper: AfterContentChecked');
  }

  imagePath(val = { withoutHelmet: ''}) {
    return `./assets/images/${val.withoutHelmet}`;
  }
}
