package com.javaguides.spring_boot.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND) //whenever api will throw this exception it will display this message
public class ResourceNotFoundException extends RuntimeException{
    //this class will throw exception whenever resource is not found at client side
    // it's a good approach to do so that our client get message for wrong requests
    public ResourceNotFoundException(String meesage){
        super(meesage);
    }
}
