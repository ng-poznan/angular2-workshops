import { FormArray } from '@angular/forms';
import { getShipFormGroup } from './get-ship-form-group';

export function getShipsFormArray(ships?): FormArray {
  return new FormArray(
    !!ships ? ships.map((ship: any) => getShipFormGroup(ship)) : [ getShipFormGroup() ]
  );
}
