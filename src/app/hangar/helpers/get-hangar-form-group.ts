import { FormGroup } from '@angular/forms';
import { getShipsFormArray } from './get-ships-form-array';

export function getHangarFormGroup(hangar?): FormGroup {
  return new FormGroup({
    ships: getShipsFormArray(!!hangar ? hangar.ships : null)
  });
}
