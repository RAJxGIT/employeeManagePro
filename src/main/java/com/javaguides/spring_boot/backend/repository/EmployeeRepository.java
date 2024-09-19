package com.javaguides.spring_boot.backend.repository;

import com.javaguides.spring_boot.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// JPA repository takes two parameters first in jpa entity (employee) and second type of primary key(Long)
//@Repository // we don't need to explicitly do that because jpa does
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
    //this repository will get all CRUD database methods
}
