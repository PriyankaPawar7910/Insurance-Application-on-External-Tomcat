package com.insurancepolicy.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.insurancepolicy.model.ClaimedPolicy;
import com.insurancepolicy.model.Policy;
import com.insurancepolicy.model.ResponseTemplate;
import com.insurancepolicy.model.User;
import com.insurancepolicy.service.IClaimedPolicyService;

/**
 * @author priypawa
 *
 */


@RestController
@RequestMapping("/claimpolicy")
@CrossOrigin
public class ClaimedPolicyController {
	
	@Autowired
	IClaimedPolicyService claimedPolicyService;
	
	Logger logger = LoggerFactory.getLogger(ClaimedPolicyController.class);

	
	/**
	 * This method returns policy holders list with respective policies
	 * @return {@link List} of {@link ResponseTemplate}
	 */
	@GetMapping("/getAll")	
	public List<ResponseTemplate> getAllClaimPolicies(){
		logger.info("All claim polies returned from ClaimPolicy Controller");
		return claimedPolicyService.getAllClaimPolicies();
	}
	/**
	 * This method return {@link List} of {@link User} with their respective {@link Policy}
	 * @param id : policyId
	 * @return {@link List} of {@link User}
	 */
	@GetMapping("/getUsersByPolicy/{id}")
	public List<User> getPolicyHolderByPolicy(@PathVariable("id") int id){
		return claimedPolicyService.getPolicyHoldersByPolicy(id);
	}
	
	/**
	 * 
	 * @param claimPolicy
	 * @return
	 */
	@PostMapping("/add")	
	public ClaimedPolicy addClaimPolicy(@RequestBody ClaimedPolicy claimPolicy) {
		logger.info("Added claim policy from ClaimPolicy Controller");
		return claimedPolicyService.addClaimPolicy(claimPolicy);
	}
	
	@GetMapping("/getClaimPolicy/{id}")
	public ClaimedPolicy getClaimPolicy(@PathVariable("id") int id) {
		logger.info("Returned claim policy from ClaimPolicy Controller");
		return claimedPolicyService.getClaimPolicy(id);
	}
	
	@GetMapping("/getUserClaimPolicy/{id}")
	public List<ResponseTemplate> getClaimPolicyByUser(@PathVariable("id") int userId) {
		logger.info("Returned claim policy by user from ClaimPolicy Controller");
		return claimedPolicyService.getClaimPolicyByUser(userId);
	}
	
	@PutMapping("/update")
	public ClaimedPolicy updateClaimPolicy(@RequestBody ClaimedPolicy claimPolicy) {
		logger.info("Updated claim policy from ClaimPolicy Controller");
		return claimedPolicyService.updateClaimPolicy(claimPolicy);
	}
	
	@DeleteMapping("/delete/{id}")
	public List<ClaimedPolicy> deleteClaimPolicy(@PathVariable("id") int planId){
		logger.info("Deleted claim policy from ClaimPolicy Controller");
		return claimedPolicyService.deleteClaimPolicy(planId);
	}

}
