package com.javaguides.spring_boot.backend;

import com.javaguides.spring_boot.backend.model.Employee;
import com.javaguides.spring_boot.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootBackendApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackendApplication.class, args);
	}
	// command line runner provide this method and it executes when our spring application starts first time
	// this run method helps to insert data into the database
	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) {
//			Employee employee = new Employee();
//			employee.setFirstName("Rajat");
//			employee.setLastName("kushwaha");
//			employee.setEmail("raj@example.com");
//
//			employeeRepository.save(employee);
//
//			Employee employee1 = new Employee();
//			employee1.setFirstName("shad");
//			employee1.setLastName("kushwaha");
//			employee1.setEmail("shad@example.com");
//
//			employeeRepository.save(employee1);

	}

}
