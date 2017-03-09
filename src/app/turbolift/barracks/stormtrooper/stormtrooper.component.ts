import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'ds-stormtrooper',
  templateUrl: './stormtrooper.component.html',
  styleUrls: ['./stormtrooper.component.scss']
})
export class StormtrooperComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() value;
  public inHelmet = true;
  public showedValue;

  constructor() { }

  ngOnInit() {
    console.log('Stormtrooper: OnInit');

    setTimeout(() => {
      this.inHelmet = false;
      console.log('Stormtrooper setTimeout called');
    }, 4000);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showedValue = changes['value'].currentValue.isJango ? changes['value'].currentValue : changes['value'].previousValue;
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

  ngOnDestroy() {
    console.log('Stormtrooper: OnDestroy');
  }

  imagePath(val = { withoutHelmet: ''}) {
    return `./assets/images/${val.withoutHelmet}`;
  }
}
