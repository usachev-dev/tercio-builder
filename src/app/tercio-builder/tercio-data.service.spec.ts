import { TestBed, inject } from '@angular/core/testing';

import { TercioDataService } from './tercio-data.service';

describe('TercioDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TercioDataService]
    });
  });

  it('should be created', inject([TercioDataService], (service: TercioDataService) => {
    expect(service).toBeTruthy();
  }));
});
