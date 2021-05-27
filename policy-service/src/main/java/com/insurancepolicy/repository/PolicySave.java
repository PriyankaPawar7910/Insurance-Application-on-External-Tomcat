package com.insurancepolicy.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.insurancepolicy.model.Policy;

@Repository
public class PolicySave {
	@Autowired
	PolicyRepository policyRepository;
	public int savePolicyId() {
		int policyId;
		List<Policy> policyList = policyRepository.findAll();
		if(policyList.isEmpty()) {
			policyId = 1;
		}
		else {
			Policy user = policyList.get(policyList.size()-1);
		   policyId = user.getPolicyId() + 1;
		}
		return policyId;
	
	}
}
