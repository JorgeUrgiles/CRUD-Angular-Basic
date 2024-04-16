import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gestionAreaGuard } from './gestion-area.guard';

describe('gestionAreaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gestionAreaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
