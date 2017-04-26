import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { source } from '../../data/source';

@Component({
  selector: 'ds-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  @Input() public ship: FormGroup;

  public get source(): any {
    return source;
  }

  public get model(): FormControl {
    return this.ship.get('model') as FormControl;
  }

  public get maxSpeed(): FormControl {
    return this.ship.get('maxSpeed') as FormControl;
  }

  public get price(): FormControl {
    return this.ship.get('price') as FormControl;
  }

  public get weight(): FormControl {
    return this.ship.get('weight') as FormControl;
  }

  public get description(): FormControl {
    return this.ship.get('description') as FormControl;
  }

  public get weapons(): FormArray {
    return this.ship.get('weapons') as FormArray;
  }

  constructor() { }

  ngOnInit() {
  }

}
