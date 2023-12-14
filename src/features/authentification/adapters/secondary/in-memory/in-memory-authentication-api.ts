import { LoginApiResponse } from '@features/authentification/adapters/secondary/api/login-response.interface';
import { User } from '@features/authentification/domain/entities/user';
import { UserBuilder } from '@features/authentification/domain/entities/user.builder';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { Observable } from 'rxjs';

export class InMemoryAuthenticationApi implements AuthenticationApiPort {
  shouldFail = false;
  private readonly user!: User;
  private readonly responseApi!: LoginApiResponse;

  constructor() {
    this.user = new UserBuilder().build();
    this.responseApi = {
      user: this.user,
      access_token: 'token',
    };
  }

  shouldFailNextLogin(): void {
    this.shouldFail = true;
  }

  login(): Observable<LoginApiResponse> {
    return new Observable(subscriber => {
      if (this.shouldFail) {
        subscriber.error(new Error('Invalid credentials'));
        return;
      }
      subscriber.next(this.responseApi);
      subscriber.complete();
    });
  }
}
