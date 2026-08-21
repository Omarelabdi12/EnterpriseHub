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
revenueData: RevenuePoint[] = [];

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
      formatter: (value) => `${value.toLocaleString('fr-FR')} €`,
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
  private readonly dashboardService = inject(DashboardService);
  private readonly destroyRef = inject(DestroyRef);
  selectedPeriod: '6m' | '1y' = '6m';
  revenue$ = this.dashboardService.getRevenue(this.selectedPeriod);
  constructor() {
  this.revenue$.pipe(
    takeUntilDestroyed(this.destroyRef)
  ).subscribe((data) => {
    this.revenueData = data;

    this.series = [
      {
        name: 'Chiffre d’affaires',
        data: data.map((point) => point.value),
      },
    ];

    this.xaxis = {
      categories: data.map((point) => point.label),
    };
  });

}
changePeriod(period: '6m' | '1y'): void {
  this.selectedPeriod = period;

  this.dashboardService
    .getRevenue(period)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((data) => {
      this.series = [
        {
          name: 'Chiffre d’affaires',
          data: data.map((point) => point.value),
        },
      ];

      this.xaxis = {
        categories: data.map((point) => point.label),
      };
    });
}
}