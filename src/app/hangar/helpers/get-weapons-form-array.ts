import { FormArray } from '@angular/forms';
import { getWeaponFormGroup } from './get-weapon-form-group';

export function getWeaponsFormArray(weapons?): FormArray {
  return new FormArray(
    !!weapons ? weapons.map((weapon) => getWeaponFormGroup(weapon)) : [ getWeaponFormGroup() ]
  );
}
