import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatcsApiService {
  apiPath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get(`${this.apiPath}/contacts`);
  }
}
