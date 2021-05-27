export const URL = {
    getAllPoliciesUrl : 'http://localhost:9494/policy-service/policy/allPolicies',
    getPolicyUrl : 'http://localhost:9494/policy-service/policy/getPolicy',
    addPolicyUrl: 'http://localhost:9494/policy-service/policy/add',
    removePolicyUrl : 'http://localhost:9494/policy-service/policy/delete',
    updatePolicyUrl : 'http://localhost:9494/policy-service/policy/update',

    userLoginUrl : 'http://localhost:9494/user-service/user/login',
    userRegUrl: 'http://localhost:9494/user-service/user/add',
    getuserIdUrl : 'http://localhost:9494/user-service/user/getUserByEmail',
    getuserUrl :  'http://localhost:9494/user-service/user/getUser',

    getUserPolicy: 'http://localhost:9494/claimedPolicy-service/claimpolicy/getAll',
    addClaimPolicyUrl: 'http://localhost:9494/claimedPolicy-service/claimpolicy/add',
    viewUserPolicyUrl : 'http://localhost:9494/claimedPolicy-service/claimpolicy/getUserClaimPolicy',
    removeUserPolicyUrl: 'http://localhost:9494/claimedPolicy-service/claimpolicy/delete'
};
