import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@features/authentification/domain/entities/user';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApiService implements AuthenticationApiPort {
  private authApiUrl = `${environment.apiUrl}/authentication`;

  constructor(private http: HttpClient) {}

  login(log: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.authApiUrl}/login`, {
      log,
      password,
    });
  }
}
