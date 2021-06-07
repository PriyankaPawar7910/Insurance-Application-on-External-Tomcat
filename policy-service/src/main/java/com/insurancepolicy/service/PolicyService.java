package com.insurancepolicy.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.insurancepolicy.exception.NotFoundException;
import com.insurancepolicy.model.Policy;
import com.insurancepolicy.repository.PolicyRepository;
import com.insurancepolicy.repository.PolicySave;

@Service
public class PolicyService implements IPolicyService {

	@Autowired
	PolicyRepository policyRepository;

	@Autowired
	PolicySave policySave;

	Logger logger = LoggerFactory.getLogger(PolicyService.class);

	@Override
	public List<Policy> getAllPolicies() {

		List<Policy> policies = policyRepository.findAll();
		for (int i = 0; i < policies.size(); i++) {
			Policy policyObject = policies.get(i);
			if (policyObject.isStatus() == true) {
				policies.remove(i);
			}
		}
		logger.info("All  policies returned from Policy Service");

		return policies;

	}

	@Override
	public Policy addPolicy(Policy policy) {
		if ((policyRepository.findByPolicyName(policy.getPolicyName()) != null)) {
			throw new NotFoundException("Policy already existed!");
		}
		policy.setPolicyId(policySave.savePolicyId());
		policy.setStatus(false);
		logger.info("Added policy from Policy Service");
		return policyRepository.save(policy);
	}

	@Override
	public Policy getPolicy(int policyId) {
		logger.info("Returned  policy from Policy Service");
		return policyRepository.findById(policyId).orElse(null);
	}

	@Override
	public Policy updatePolicy(Policy policy) {
		Policy policyDetails = policyRepository.findById(policy.getPolicyId()).orElse(null);
		if (policyDetails != null) {
			policyRepository.save(policy);
		}
		logger.info("Updated policy from Policy Service");
		return policy;
	}

	@Override
	public Policy deletePolicy(Policy policy) {
		Policy policyDetails = policyRepository.findById(policy.getPolicyId()).orElse(null);
		if (policyDetails != null) {
			policyDetails.setStatus(true);
			policyRepository.save(policyDetails);
		}
		logger.info("Deleted policy from Policy Service");
		return policyDetails;
	}

}
