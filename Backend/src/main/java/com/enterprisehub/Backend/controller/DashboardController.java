package com.enterprisehub.Backend.controller;

import com.enterprisehub.Backend.dto.dashboard.DashboardRevenueResponse;
import com.enterprisehub.Backend.dto.dashboard.DashboardStatsResponse;
import com.enterprisehub.Backend.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/stats")
    public DashboardStatsResponse getStats() {
        return dashboardService.getStats();
    }
    @GetMapping("/revenue")
    public List<DashboardRevenueResponse> getRevenue() {
        return dashboardService.getRevenue();
    }
}