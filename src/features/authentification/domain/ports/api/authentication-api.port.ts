import { LoginApiResponse } from '@features/authentification/adapters/secondary/api/login-response.interface';
import { Observable } from 'rxjs';

export abstract class AuthenticationApiPort {
  abstract login(log: string, password: string): Observable<LoginApiResponse>;
}
