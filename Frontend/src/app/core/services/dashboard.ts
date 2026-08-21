import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats, RevenuePoint  } from '../models/dashboard.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/dashboard';
  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/stats`);
  }
  

  getRevenue(): Observable<RevenuePoint[]> {
    return this.http.get<RevenuePoint[]>(
      `${this.apiUrl}/revenue`
    );
  }
}
