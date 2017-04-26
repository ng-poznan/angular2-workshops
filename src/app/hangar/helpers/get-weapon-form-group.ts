import { FormControl, FormGroup } from '@angular/forms';

export function getWeaponFormGroup(weapon?): FormGroup {
  return new FormGroup({
    name: new FormControl(),
    power: new FormControl(),
    weight: new FormControl()
  });
}
