import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalePointsApiService {
  apiPath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSalePoints(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiPath}/sale-points`);
  }
}
