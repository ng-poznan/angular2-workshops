import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getWeaponsFormArray } from './get-weapons-form-array';

export function getShipFormGroup(ship?): FormGroup {
  return new FormGroup({
    model: new FormControl(),
    maxSpeed: new FormControl(null, [ Validators.required ]),
    price: new FormControl(null, [ Validators.required ]),
    weight: new FormControl(null, [ Validators.required ]),
    description: new FormControl(null, [ Validators.required ]),
    weapons: getWeaponsFormArray(!!ship ? ship.weapons : null)
  });
}
