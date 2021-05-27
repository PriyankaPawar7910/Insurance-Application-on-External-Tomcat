package com.insurancepolicy;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author priypawa

 *
 */
import org.springframework.web.client.RestTemplate;
@SpringBootApplication
public class PolicyServiceApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(PolicyServiceApplication.class, args);
	}

	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	       return application.sources(PolicyServiceApplication.class);
	    }


}
