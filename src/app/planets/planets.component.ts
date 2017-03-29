import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/';

import { PlanetsService } from './../core/services/planets.service';

@Component({
  selector: 'ds-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planet$: Observable<any[]>;

  private planetsServ: PlanetsService;

  constructor(@Inject(PlanetsService) planetsServ) {
    this.planetsServ = planetsServ;
  }

  ngOnInit() {
    this.planet$  = this.planetsServ.getPlanets();
  }
}
