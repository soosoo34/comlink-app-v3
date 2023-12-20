import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MandatsService {
  apiPath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMandats(): Observable<any> {
    console.log('getMandats');
    return this.http.get(`${this.apiPath}/mandats`);
  }
}
