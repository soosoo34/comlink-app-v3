import { User } from '@features/authentification/domain/entities/user';
import { UserBuilder } from '@features/authentification/domain/entities/user.builder';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { Observable } from 'rxjs';

export class InMemoryAuthenticationApi implements AuthenticationApiPort {
  shouldFail = false;
  private readonly user!: User;

  constructor() {
    this.user = new UserBuilder().build();
  }

  shouldFailNextLogin(): void {
    this.shouldFail = true;
  }

  login(): Observable<User> {
    return new Observable(subscriber => {
      if (this.shouldFail) {
        subscriber.error(new Error('Invalid credentials'));
        return;
      }
      subscriber.next(this.user);
      subscriber.complete();
    });
  }
}
