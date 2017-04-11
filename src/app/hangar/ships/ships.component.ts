import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeMap';

import { ShipsService } from '../../core/services/ships.service';

@Component({
  selector: 'ds-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  private ships: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private shipsServ: ShipsService
  ) {}

  ngOnInit() {
    this.ships = this.route.data.pluck('ships');
  }
}
