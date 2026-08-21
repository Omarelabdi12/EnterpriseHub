import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats, RevenuePoint  } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getStats(): Observable<DashboardStats> {
    return of({
      revenue: 24580,
      orders: 142,
      newCustomers: 38,
      criticalStock: 12,
    });
  }
  getRevenue(period: '6m' | '1y'): Observable<RevenuePoint[]> {
  if (period === '1y') {
    return of([
      { label: 'Jan', value: 18400 },
      { label: 'Fév', value: 21200 },
      { label: 'Mar', value: 19800 },
      { label: 'Avr', value: 24500 },
      { label: 'Mai', value: 23100 },
      { label: 'Juin', value: 26800 },
      { label: 'Juil', value: 28900 },
      { label: 'Août', value: 27600 },
      { label: 'Sep', value: 30100 },
      { label: 'Oct', value: 32400 },
      { label: 'Nov', value: 35700 },
      { label: 'Déc', value: 38200 },
    ]);
  }

  return of([
    { label: 'Jan', value: 18400 },
    { label: 'Fév', value: 21200 },
    { label: 'Mar', value: 19800 },
    { label: 'Avr', value: 24500 },
    { label: 'Mai', value: 23100 },
    { label: 'Juin', value: 26800 },
  ]);
}
}
