import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

@Component({
  selector: 'ds-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planet$: Observable<any[]>;

  constructor() {}

  ngOnInit() {
    this.planet$  = Observable.of([
      { name: 'Mercury', gravity: '0.378', population: '2', diameter: '4.879' },
      { name: 'Venus', gravity: '0.904', population: '1', diameter: '12.000' },
      { name: 'Earth', gravity: '1.000', population: '7.100.000.000', diameter: '12.500' }
    ]);
  }
}
