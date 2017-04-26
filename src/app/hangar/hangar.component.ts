import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getHangarFormGroup } from './helpers/get-hangar-form-group';
import { source } from './data/source';
import { Observable } from 'rxjs/';

@Component({
  selector: 'ds-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  public hangar: FormGroup;

  public get ships(): FormArray {
    return this.hangar.get('ships') as FormArray;
  }

  constructor(
  ) { }

  ngOnInit() {
    this.hangar = getHangarFormGroup();

    // simulation response from api
    Observable
      .of(source.data)
      .delay(2000)
      .subscribe((value) => {
        this.hangar = getHangarFormGroup(value);
        this.hangar.patchValue(value);
      });
  }

}
