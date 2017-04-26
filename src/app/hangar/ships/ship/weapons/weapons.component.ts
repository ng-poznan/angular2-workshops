import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { getWeaponFormGroup } from '../../../helpers/get-weapon-form-group';

@Component({
  selector: 'ds-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  @Input() public weapons: FormArray;

  constructor() { }

  ngOnInit() {
  }

  public addWeapon(weapons: FormArray): void {
    weapons.push(getWeaponFormGroup());
  }

  public removeWeapon(weapons: FormArray, index: number): void {
    weapons.removeAt(index);
  }

}
