import { Component, OnInit } from '@angular/core';
import { source } from './data/source';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from './validators/validators';

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

    this.form.get('job').valueChanges.subscribe((value) => {
      const description: FormControl = this.form.get('description') as FormControl;
      value === '0' ? description.setValidators(CustomValidators.required) : description.clearValidators();

      description.updateValueAndValidity();
    });
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

  public toArray(object: any): any {
    return !!object ? Object.keys(object).reduce((acc, key, index) => acc.concat(object[key]), []) : [];
  }

  public getForm(): FormGroup {
    return this.fb.group({
      firstname: [ '', [ CustomValidators.required ] ],
      lastname: [ '', [ CustomValidators.required ] ],
      species: [ '', [ CustomValidators.required ] ],
      job: [ '', [ CustomValidators.required ] ],
      power: [ { value: '', disabled: true }, [ CustomValidators.required ] ],
      weapon: [ { value: '', disabled: true }, [ CustomValidators.required ] ],
      ship: [ { value: '', disabled: true }, [ CustomValidators.required ] ],
      description: [ '' ],
      agreements: this.fb.group({
        ownShip: [ { value: false, disabled: true }, [ CustomValidators.required ] ],
        newsletter: [ false, [ CustomValidators.newsletter ] ]
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
