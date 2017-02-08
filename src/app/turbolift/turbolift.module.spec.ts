/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TurboliftModule } from './turbolift.module';

describe('TurboliftModule', () => {
  let turboliftModule;

  beforeEach(() => {
    turboliftModule = new TurboliftModule();
  });

  it('should create an instance', () => {
    expect(turboliftModule).toBeTruthy();
  });
});
