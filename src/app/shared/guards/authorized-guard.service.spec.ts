/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorizedGuardService } from './authorized-guard.service';

describe('AuthorizedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedGuardService]
    });
  });

  it('should ...', inject([AuthorizedGuardService], (service: AuthorizedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
