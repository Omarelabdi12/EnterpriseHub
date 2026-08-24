import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api';
import {
  DashboardStats,
  RevenuePoint
} from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private readonly api = inject(ApiService);

  getStats(): Observable<DashboardStats> {
    return this.api.get<DashboardStats>('/dashboard/stats');
  }

  getRevenue(): Observable<RevenuePoint[]> {
    return this.api.get<RevenuePoint[]>('/dashboard/revenue');
  }
}