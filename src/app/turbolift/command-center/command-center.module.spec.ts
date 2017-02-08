/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CommandCenterModule } from './command-center.module';

describe('CommandCenterModule', () => {
  let commandCenterModule;

  beforeEach(() => {
    commandCenterModule = new CommandCenterModule();
  });

  it('should create an instance', () => {
    expect(commandCenterModule).toBeTruthy();
  });
});
