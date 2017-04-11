import { TestBed, inject } from '@angular/core/testing';

import { ShipsService } from './ships.service';

describe('ShipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipsService]
    });
  });

  it('should ...', inject([ShipsService], (service: ShipsService) => {
    expect(service).toBeTruthy();
  }));
});
