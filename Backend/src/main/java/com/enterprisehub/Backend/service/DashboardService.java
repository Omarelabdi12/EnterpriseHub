package com.enterprisehub.Backend.service;

import com.enterprisehub.Backend.dto.dashboard.DashboardRevenueResponse;
import com.enterprisehub.Backend.dto.dashboard.DashboardStatsResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    public DashboardStatsResponse getStats() {
        return new DashboardStatsResponse(
                24580,
                142,
                38,
                12
        );
    }
    public List<DashboardRevenueResponse> getRevenue() {
        return List.of(
                new DashboardRevenueResponse("Mar", 3200),
                new DashboardRevenueResponse("Apr", 4100),
                new DashboardRevenueResponse("May", 3800),
                new DashboardRevenueResponse("Jun", 5200),
                new DashboardRevenueResponse("Jul", 4600),
                new DashboardRevenueResponse("Aug", 3680)
        );
    }
}