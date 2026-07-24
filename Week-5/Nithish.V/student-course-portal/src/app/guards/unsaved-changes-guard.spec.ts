import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should create', () => {

    const component: any = {
      canDeactivate: () => true
    };

    const currentRoute = {} as ActivatedRouteSnapshot;
    const currentState = {} as RouterStateSnapshot;
    const nextState = {} as RouterStateSnapshot;

    const result = TestBed.runInInjectionContext(() =>
      unsavedChangesGuard(
        component,
        currentRoute,
        currentState,
        nextState
      )
    );

    expect(result).toBeTruthy();

  });

});