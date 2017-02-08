/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let coreModule;

  beforeEach(() => {
    coreModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
