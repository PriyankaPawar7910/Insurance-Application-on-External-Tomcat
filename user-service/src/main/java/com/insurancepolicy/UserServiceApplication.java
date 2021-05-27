package com.insurancepolicy;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserServiceApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}
	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	       return application.sources(UserServiceApplication.class);
	    }

}
