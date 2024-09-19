package com.javaguides.spring_boot.backend.controller;

import com.javaguides.spring_boot.backend.exception.ResourceNotFoundException;
import com.javaguides.spring_boot.backend.model.Employee;
import com.javaguides.spring_boot.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*") // by adding this any client can access this api i.e. any server
//@CrossOrigin(origins = {"http://localhost:3000/"}) //for specific url
@RestController // once added this class becomes spring mvs rest controller and capable to handle HTTP requests
@RequestMapping("api/v1/employee") //common request for our api
public class EmployeeController {
    @Autowired // this will add constructor to take value of this
    private EmployeeRepository employeeRepository;

//  building getAllEmployees rest api
    @GetMapping
    public List<Employee> gettAllEmployees()
    {
        return employeeRepository.findAll();
    }

//  building create employee rest api
//  it will handle http post requests and it will get employee JSON obejct from http post request
//  and convert it into employee java obejct that is going to be saved in our database
//  You need to annotate the employee parameter with @RequestBody so that Spring can map the incoming JSON payload to the Employee object.
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee)
    {
        return employeeRepository.save(employee);
    }
//   building delete employee rest api
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id)
    {
       Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with this id" + id));
       employeeRepository.delete(employee);
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    build getEmployee by id
//    to bind the value of id with method argument we are gonna use @Pathvariable
     @GetMapping("{id}")
     public ResponseEntity<Employee> getEmployee(@PathVariable long id)
     {
         Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with this id" + id));
         return ResponseEntity.ok(employee);
     }

//   update employee rest api
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id , @RequestBody Employee employeeDetail)
    {
        Employee updateEmployee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with this id" + id));
        updateEmployee.setFirstName(employeeDetail.getFirstName());
        updateEmployee.setLastName(employeeDetail.getLastName());
        updateEmployee.setEmail(employeeDetail.getEmail());
        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }

}
