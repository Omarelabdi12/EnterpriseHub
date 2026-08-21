package com.enterprisehub.Backend.dto.dashboard;

public record DashboardStatsResponse(double revenue, long orders, long newCustomers, long criticalStock) {
}