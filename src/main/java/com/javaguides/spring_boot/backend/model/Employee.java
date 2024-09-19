package com.javaguides.spring_boot.backend.model;

import jakarta.persistence.*;
import lombok.*;

//@Data
@Getter //to create getter and setters for these variables and these annotations are defined in lombok package
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity // to make this class as a jpa entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // to provide primary key generation strategy
    private long id;

    @Column(name = "first_name", nullable = false) // specifies column name and not null
    private String firstName;

    @Column(name = "last_name", nullable = false) //if we don't provide these names explicitly than jpa automatically does for us
    private String lastName;
    @Column(name = "email")
    private String email;

}
