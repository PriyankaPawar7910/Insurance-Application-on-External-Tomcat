package com.insurancepolicy.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.insurancepolicy.model.User;
@Repository
public class UserSave {
	@Autowired
	UserRepository userRepository;
	public int saveUserId() {
		int userId;
		List<User> userList = userRepository.findAll();
		if(userList.isEmpty()) {
			userId = 1;
		}
		else {
			User user = userList.get(userList.size()-1);
			userId =  user.getUserId() + 1;
		}
	
		return userId;
	}

}
