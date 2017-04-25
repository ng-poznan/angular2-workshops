import { FormControl, Validators } from '@angular/forms';

export class CustomValidators {

  static newsletter(control: FormControl): any {
    const value = control.value;

    return value ? null : { newsletter: 'please join the newsletter, if you will not Lord Vader will be sad' };
  }

  static required(control): any {
    return !Validators.required(control) ? null : { required: 'the field is required' };
  }

}
