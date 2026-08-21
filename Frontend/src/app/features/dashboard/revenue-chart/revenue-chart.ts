import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApexFill } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { DashboardService } from '../../../core/services/dashboard';
import { RevenuePoint } from '../../../core/models/dashboard.model';

@Component({
  selector: 'app-revenue-chart',
  imports: [NgApexchartsModule],
  templateUrl: './revenue-chart.html',
  styleUrl: './revenue-chart.scss',
})
export class RevenueChart {

  private readonly dashboardService = inject(DashboardService);
  private readonly destroyRef = inject(DestroyRef);

  revenueData: RevenuePoint[] = [];

  selectedPeriod: '6m' | '1y' = '6m';

  series: ApexAxisChartSeries = [
    {
      name: 'Chiffre d’affaires',
      data: [],
    },
  ];

  chart: ApexChart = {
    type: 'area',
    height: 320,
    toolbar: {
      show: false,
    },
    background: 'transparent',
    animations: {
      enabled: true,
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 120,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  };

  stroke: ApexStroke = {
    curve: 'smooth',
    width: 3,
  };

  dataLabels: ApexDataLabels = {
    enabled: false,
  };

  xaxis: ApexXAxis = {
    categories: [],
  };

  yaxis: ApexYAxis = {
    labels: {
      formatter: (value) => `${Math.round(value / 1000)}k €`,
    },
  };

  grid: ApexGrid = {
    borderColor: 'rgba(255,255,255,0.06)',
  };

  tooltip: ApexTooltip = {
    y: {
      formatter: (value) =>
        `${value.toLocaleString('fr-FR')} €`,
    },
  };

  fill: ApexFill = {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.02,
      stops: [0, 100],
    },
  };

  markers = {
    size: 0,
    hover: {
      size: 6,
    },
  };

  constructor() {
    this.dashboardService
      .getRevenue()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.revenueData = data;
        this.updateChart();
      });
  }

  changePeriod(period: '6m' | '1y'): void {
    this.selectedPeriod = period;
    this.updateChart();
  }

  private updateChart(): void {
  const data =
    this.selectedPeriod === '6m'
      ? this.revenueData.slice(-6)
      : this.revenueData.slice(-12);

  console.log('DATA:', data);
  console.log('REVENUE:', data.map(point => point.revenue));
  console.log('MONTHS:', data.map(point => point.month));

  this.series = [
    {
      name: 'Chiffre d’affaires',
      data: data.map(point => point.revenue),
    },
  ];

  this.xaxis = {
    categories: data.map(point => point.month),
  };
}
}
