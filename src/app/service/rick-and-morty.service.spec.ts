import { TestBed } from '@angular/core/testing';

import { RickAndMortyService } from './rick-and-morty.service';

describe('RickAndMortyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickAndMortyService = TestBed.get(RickAndMortyService);
    expect(service).toBeTruthy();
  });
});
