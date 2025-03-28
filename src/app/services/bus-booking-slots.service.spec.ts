import { TestBed } from '@angular/core/testing';

import { BusBookingSlotsService } from './bus-booking-slots.service';

describe('BusBookingSlotsService', () => {
  let service: BusBookingSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusBookingSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
