package com.insurancepolicy.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.insurancepolicy.model.ClaimedPolicy;

@Repository
public class ClaimedPolicySave {
	@Autowired
	ClaimedPolicyRepository claimRepository;
	public int savePlanId() {
		int planId;
		List<ClaimedPolicy> claimPolicyList = claimRepository.findAll();
		if(claimPolicyList.isEmpty()) {
			planId = 1;
		}
		else {
			ClaimedPolicy policy = claimPolicyList.get(claimPolicyList.size()-1);
			planId = policy.getPlanId() + 1;
		}
		return planId;
	
	}
}
