import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ds-stormtrooper',
  templateUrl: './stormtrooper.component.html',
  styleUrls: ['./stormtrooper.component.scss']
})
export class StormtrooperComponent implements OnInit {
  @Input() value: any;
  @Output() saySomething = new EventEmitter<string>();
  public inHelmet = true;

  constructor() { }

  ngOnInit() {
  }

  toggleHelmet() {
    this.inHelmet = !this.inHelmet;
  }

  imagePath(val) {
    return `./assets/images/${val}`;
  }
}
