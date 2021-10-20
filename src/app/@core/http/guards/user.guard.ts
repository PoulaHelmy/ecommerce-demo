import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';

import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.userDate$.pipe(
      map((user) => {
        console.log(user.role === 'USER', user.role);
        if (user.role === 'USER') {
          return true;
        } else {
          this.router.navigate(['/']).then();
          return false;
        }
      })
    );
  }
}
