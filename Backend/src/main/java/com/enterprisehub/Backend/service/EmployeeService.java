package com.enterprisehub.Backend.service;

import com.enterprisehub.Backend.dto.EmployeeRequest;
import com.enterprisehub.Backend.dto.EmployeeResponse;
import com.enterprisehub.Backend.entity.Employee;
import com.enterprisehub.Backend.exception.DuplicateResourceException;
import com.enterprisehub.Backend.exception.ResourceNotFoundException;
import com.enterprisehub.Backend.mapper.EmployeeMapper;
import com.enterprisehub.Backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final EmployeeMapper employeeMapper;

    public EmployeeService(
            EmployeeRepository employeeRepository,
            EmployeeMapper employeeMapper
    ) {
        this.employeeRepository = employeeRepository;
        this.employeeMapper = employeeMapper;
    }

    public EmployeeResponse create(EmployeeRequest request) {

        if (employeeRepository.existsByEmail(request.email())) {
            throw new DuplicateResourceException(
                    "An employee with this email already exists"
            );
        }

        Employee employee = employeeMapper.toEntity(request);

        Employee savedEmployee = employeeRepository.save(employee);

        return employeeMapper.toResponse(savedEmployee);
    }

    @Transactional(readOnly = true)
    public EmployeeResponse findById(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + id
                ));

        return employeeMapper.toResponse(employee);
    }

    @Transactional(readOnly = true)
    public List<EmployeeResponse> findAll() {

        return employeeRepository.findAll()
                .stream()
                .map(employeeMapper::toResponse)
                .toList();
    }

    public EmployeeResponse update(Long id, EmployeeRequest request) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + id
                ));

        if (!employee.getEmail().equals(request.email())
                && employeeRepository.existsByEmail(request.email())) {

            throw new DuplicateResourceException(
                    "An employee with this email already exists"
            );
        }

        employeeMapper.updateEntity(employee, request);

        return employeeMapper.toResponse(employee);
    }

    public void delete(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Employee not found with id: " + id
                ));

        employeeRepository.delete(employee);
    }
}