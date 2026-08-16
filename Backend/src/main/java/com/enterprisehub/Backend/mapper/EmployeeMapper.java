package com.enterprisehub.Backend.mapper;

import com.enterprisehub.Backend.dto.EmployeeRequest;
import com.enterprisehub.Backend.dto.EmployeeResponse;
import com.enterprisehub.Backend.entity.Employee;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapper {

    public Employee toEntity(EmployeeRequest request) {
        Employee employee = new Employee();

        employee.setFirstName(request.firstName());
        employee.setLastName(request.lastName());
        employee.setEmail(request.email());
        employee.setRole(request.role());

        return employee;
    }

    public EmployeeResponse toResponse(Employee employee) {
        return new EmployeeResponse(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getRole(),
                employee.getCreatedAt(),
                employee.getUpdatedAt()
        );
    }

    public void updateEntity(Employee employee, EmployeeRequest request) {
        employee.setFirstName(request.firstName());
        employee.setLastName(request.lastName());
        employee.setEmail(request.email());
        employee.setRole(request.role());
    }
}