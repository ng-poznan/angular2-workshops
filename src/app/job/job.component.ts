import { Component, OnInit } from '@angular/core';
import { source } from './data/source';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ds-careers',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public source: any;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.source = source;
    this.form = this.getForm();

    this.switchDisableField(this.form.get('job'), this.form.get('power'), '0');
    this.switchDisableField(this.form.get('job'), this.form.get('weapon'), '1');
    this.switchDisableField(this.form.get('job'), this.form.get('ship'), '2');
    this.switchDisableField(this.form.get('job'), this.form.get(['agreements', 'ownShip']), '2');
  }

  public switchDisableField(
    field: AbstractControl,
    target: AbstractControl,
    whenEnable: any
  ): void {
    field.valueChanges.subscribe((value: any) => {
      value === whenEnable ? target.enable() : target.disable();
    });
  }

  public getForm(): FormGroup {
    return this.fb.group({
      firstname: [ '' ],
      lastname: [ '' ],
      species: [ '' ],
      job: [ '' ],
      power: [ { value: '', disabled: true } ],
      weapon: [ { value: '', disabled: true } ],
      ship: [ { value: '', disabled: true } ],
      description: [ '' ],
      agreements: this.fb.group({
        ownShip: [ { value: false, disabled: true } ],
        newsletter: [ false ]
      })
    });
  }

  public sendApplication(form: FormGroup): void {
    console.log(form.value);
    console.log(form.getRawValue());
  }

  public reset(form: FormGroup): void {
    form.reset({
      firstname: '',
      lastname: '',
      species: '',
      job: '',
      power: { value: '', disabled: true },
      weapon: { value: '', disabled: true },
      ship: { value: '', disabled: true },
      description: '',
      agreements: {
        ownShip: false,
        newsletter: false
      }
    });
  }

  public setValues(form: FormGroup): void {
    form.setValue({
      firstname: 'new first name',
      lastname: 'new last name',
      species: '0',
      job: '0',
      power: '1',
      weapon: '',
      ship: '',
      description: '',
      agreements: {
        ownShip: true,
        newsletter: false
      }
    });

    // form.patchValue({
    //   firstname: 'new first name',
    //   lastname: 'new last name',
    //   agreements: {
    //     newsletter: true
    //   }
    // });
  }

}
