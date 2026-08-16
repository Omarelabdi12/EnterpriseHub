package com.enterprisehub.Backend.repository;

import com.enterprisehub.Backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}