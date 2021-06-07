package com.insurancepolicy.service;

import java.util.List;

import com.insurancepolicy.model.ClaimedPolicy;
import com.insurancepolicy.model.ResponseTemplate;
import com.insurancepolicy.model.User;

public interface IClaimedPolicyService {

	List<ResponseTemplate> getAllClaimPolicies();

	ClaimedPolicy addClaimPolicy(ClaimedPolicy claimPolicy);

	ClaimedPolicy getClaimPolicy(int id);

	ClaimedPolicy updateClaimPolicy(ClaimedPolicy claimPolicy);

	List<ClaimedPolicy> deleteClaimPolicy(int planId);

	List<ResponseTemplate>  getClaimPolicyByUser(int userId);

	List<User> getPolicyHoldersByPolicy(int policyId);

}
