import { User } from '@features/authentification/domain/entities/user';
import { Observable } from 'rxjs';

export abstract class AuthenticationApiPort {
  abstract login(log: string, password: string): Observable<User>;
}
