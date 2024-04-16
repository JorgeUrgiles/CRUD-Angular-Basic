import { TestBed } from '@angular/core/testing';

import { GestorAreaService } from './gestor-area.service';

describe('GestorAreaService', () => {
  let service: GestorAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
