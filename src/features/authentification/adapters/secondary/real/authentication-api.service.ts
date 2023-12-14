import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginApiResponse } from '@features/authentification/adapters/secondary/api/login-response.interface';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApiService implements AuthenticationApiPort {
  private authApiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  login(log: string, password: string): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${this.authApiUrl}/auth/login`, {
      log,
      password,
    });
  }
}
