import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

import { PlanetsService } from './../core/services/planets.service';

@Component({
  selector: 'ds-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planet$: Observable<any[]>;

  constructor(private planetsServ: PlanetsService) {}

  ngOnInit() {
    this.planet$  = this.planetsServ.getPlanets();
  }
}
