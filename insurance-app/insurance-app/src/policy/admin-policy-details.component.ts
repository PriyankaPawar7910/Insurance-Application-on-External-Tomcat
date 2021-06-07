import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddClaimPolicy } from 'src/common/addclaim';
import { Policy } from 'src/common/policy';
import { User } from 'src/common/user';
import { NotificationService } from 'src/services/notification.service';
import { PolicyService } from 'src/services/policy.service';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';
import { UserPolicyService } from 'src/services/user-policy.service';
import { UserService } from 'src/services/user.service';

@Component({
  templateUrl: './admin-policy-details.component.html',
  styles: [`
    .container {padding-left:20px; padding-right:20px;}
    .product-image {height:400px;}
    `],
    providers: [DatePipe]
})
export class PolicyDetailsBComponent implements OnInit {
  policy: Policy;
  policies: Policy;
  click: boolean = false;
  userRole: string;
  users: Array<User>;
  isUserListEmpty: boolean;
  claim: AddClaimPolicy = {
    userId: undefined,
    policyId: undefined,
    claimedDate: undefined,
    status: undefined

  };
  myDate = new Date();


  constructor(private policyService: PolicyService,private notifyService : NotificationService,
     private route: ActivatedRoute, private router: Router, private userService: UserService,
     private datePipe: DatePipe, private userAuthService:UserAuthenticateService,private userPolicyService: UserPolicyService) {
      this.userRole = userAuthService.getUserRole();
  }
  ngOnInit(): void {
    this.policyService.getPolicy(+this.route.snapshot.params['id']).subscribe((policyInfo: Policy) => {
      this.policy = policyInfo;
    })
    this.userService.getPolicyHolderList(+this.route.snapshot.params['id']).subscribe((userList:User[]) =>{
      this.users = userList;
      this.isUserListEmpty = false;
      console.log(this.users);
    },
    error => {
      this.isUserListEmpty = true;
    })
  }
  removeBtn(id) {
    this.policyService.getPolicy(id).subscribe((policyData:Policy) => {
      this.policyService.removePolicy(policyData).subscribe((policy: Policy) => {
        this.policies = policy;
        this.click = !this.click;
        //alert('Policy removed!');
        this.notifyService.showSuccess('Policy removed successfully','Notification');
        this.router.navigateByUrl('/adminpolicylist');
      },
        error => {
          console.error('Error!', error);
          //alert('Policy does not  exist under this name!');
          this.notifyService.showError('Policy did not removed!','Notification');
          const currentUrl = this.route.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
        }
      )

    })
    

  }
  userListEmpty(){
    return this.isUserListEmpty;
  }

  editBtn(id) {
    this.router.navigateByUrl(`/updatepolicy/${id}`);
  }
  backBtn(){
    if(this.userRole==='ADMIN'){
      this.router.navigateByUrl('/adminpolicylist');
  }
  else if(this.userRole==='SUPERADMIN'){
      this.router.navigateByUrl('/superadminpolicylist');

  }  
  }
  buyBtn(policyId: number) {

    this.claim.userId = +this.userAuthService.getUserId();
    this.claim.policyId = policyId;
    this.claim.status = false;
    this.claim.claimedDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.userPolicyService.claimPolicy(this.claim).subscribe(
      response => {
        console.log('Success!', response);
        this.click = !this.click;
        //alert('Successfuly added!');
        this.notifyService.showSuccess('Policy added!','Notification');
      },
      error => {
        console.error('Error!', error);
        //alert('You have already taken this policy!');
        this.notifyService.showError('You have already taken this policy!','Notification');
      });


  }



}
