import { FormControl, FormGroup } from '@angular/forms';
import { getWeaponsFormArray } from './get-weapons-form-array';

export function getShipFormGroup(ship?): FormGroup {
  return new FormGroup({
    model: new FormControl(),
    maxSpeed: new FormControl(),
    price: new FormControl(),
    weight: new FormControl(),
    description: new FormControl(),
    weapons: getWeaponsFormArray(!!ship ? ship.weapons : null)
  });
}
