import { Component, OnInit } from '@angular/core';

const stormtroopers = [
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'jango.png',
  },
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'jango.png',
  },
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'HanSoloStormtrooper.jpg',
  },
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'jango.png',
  },
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'luke-stormtrooper.jpg',
  },
  {
    inHelmet: 'stormtrooper.jpg',
    withoutHelmet: 'jango.png',
  },
];

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
