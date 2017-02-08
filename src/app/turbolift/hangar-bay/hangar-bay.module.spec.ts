/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HangarBayModule } from './hangar-bay.module';

describe('HangarBayModule', () => {
  let hangarBayModule;

  beforeEach(() => {
    hangarBayModule = new HangarBayModule();
  });

  it('should create an instance', () => {
    expect(hangarBayModule).toBeTruthy();
  });
});
