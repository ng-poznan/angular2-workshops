import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { getShipFormGroup } from '../helpers/get-ship-form-group';

@Component({
  selector: 'ds-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  @Input() public ships: FormArray;

  constructor() { }

  ngOnInit() {
  }

  public addShip(ships: FormArray): void {
    ships.push(getShipFormGroup());
  }

}
