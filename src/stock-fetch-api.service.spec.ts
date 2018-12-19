import { TestBed } from '@angular/core/testing';

import { StockFetchApiService } from './stock-fetch-api.service';

describe('StockFetchApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockFetchApiService = TestBed.get(StockFetchApiService);
    expect(service).toBeTruthy();
  });
});
