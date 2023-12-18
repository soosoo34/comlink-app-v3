import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSelectors } from '@features/authentification/domain/redux/selectors/authentication.selectors';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  @Select(AuthenticationSelectors.isLogged) isLogged$!: Observable<boolean>;

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.isLogged$.pipe(
      map(isLogged => {
        if (!isLogged) {
          this.router.navigateByUrl('/login');
          return false;
        }
        return true;
      })
    );
  }
}
