/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let sharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
