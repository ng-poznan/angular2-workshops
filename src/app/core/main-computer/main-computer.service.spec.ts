/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainComputerService } from './main-computer.service';

describe('MainComputerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainComputerService]
    });
  });

  it('should ...', inject([MainComputerService], (service: MainComputerService) => {
    expect(service).toBeTruthy();
  }));
});
