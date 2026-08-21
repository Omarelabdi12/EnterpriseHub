import { Component, inject } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { RevenueChart } from './revenue-chart/revenue-chart';
@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe, AsyncPipe, RevenueChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  private readonly dashboardService = inject(DashboardService);

  stats$ = this.dashboardService.getStats();
}