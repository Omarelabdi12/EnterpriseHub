export interface DashboardStats {
  revenue: number;
  orders: number;
  newCustomers: number;
  criticalStock: number;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}