import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';

import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GustGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('fffffffffffff ', isLoggedIn);
          return !isLoggedIn;
        } else {
          return true;
        }
      })
    );
  }
}
