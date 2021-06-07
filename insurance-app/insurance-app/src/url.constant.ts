export const URL={
    getAllPoliciesUrl : 'http://localhost:9494/policy-service/policy/allPolicies',
    //getAllPoliciesUrl : 'http://localhost:8001/policy/allPolicies',
    getPolicyUrl :'http://localhost:9494/policy-service/policy/getPolicy',
    //getPolicyUrl :'http://localhost:8001/policy/getPolicy',

    addPolicyUrl:'http://localhost:9494/policy-service/policy/add',
    //addPolicyUrl:'http://localhost:8001/policy/add',
    removePolicyUrl :'http://localhost:9494/policy-service/policy/delete',
    //removePolicyUrl :'http://localhost:8001/policy/delete',

    updatePolicyUrl :'http://localhost:9494/policy-service/policy/update',

    //userLoginUrl : 'http://localhost:9494/user-service/user/login',
    userLoginUrl : 'http://localhost:8002/user/login',
    userRegUrl:'http://localhost:9494/user-service/user/add',
    //getuserIdUrl : 'http://localhost:9494/user-service/user/getUserByEmail',
    getuserIdUrl : 'http://localhost:8002/user/getUserByEmail',
    getuserUrl :  'http://localhost:9494/user-service/user/getUser',
    getAllUsers : 'http://localhost:9494/user-service/user/allUsers',
    updateUserUrl : 'http://localhost:9494/user-service/user/update',
    removeUserUrl: 'http://localhost:9494/user-service/user/delete',

    getUserPolicy:'http://localhost:9494/claimedPolicy-service/claimpolicy/getAll',
    addClaimPolicyUrl:'http://localhost:9494/claimedPolicy-service/claimpolicy/add',
    viewUserPolicyUrl :'http://localhost:9494/claimedPolicy-service/claimpolicy/getUserClaimPolicy',
    removeUserPolicyUrl:'http://localhost:9494/claimedPolicy-service/claimpolicy/delete',
    policyHolderUrl: 'http://localhost:9494/claimedPolicy-service/claimpolicy/getUsersByPolicy'


    


  


}