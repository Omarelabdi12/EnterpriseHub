export interface DashboardStats {
    revenue: number;
    orders: number;
    newCustomers: number;
    criticalStock: number;
}

export interface RevenuePoint {
  label: string;
  value: number;
}