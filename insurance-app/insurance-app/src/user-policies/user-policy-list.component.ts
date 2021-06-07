import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPolicy } from 'src/common/user-policy';
import { NotificationService } from 'src/services/notification.service';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';
import { UserPolicyService } from 'src/services/user-policy.service';
@Component({
    selector: 'app-user-policy-list',
    templateUrl: './user-policy-list.component.html',
    styles: [`
     .thumbnail {min-height:100px;}
     .pad-left {margin-left:10px;}

     `]

})
export class UserPolicyListComponent implements OnInit {
    policies: Array<UserPolicy>;
    userPolicies: Array<UserPolicy>;
    click: boolean = false;
    userRole: string;
    constructor(private userPolicyService: UserPolicyService,private notifyService: NotificationService,
         private route: Router, private authService: UserAuthenticateService) {
        this.policies = [];
        this.userRole = this.authService.getUserRole();

    }
    ngOnInit(): void {
        this.userPolicyService.getUserPolicies().subscribe((policyList: UserPolicy[]) => {
            this.policies = policyList;
            console.log(this.policies);
        });
    }
    removeBtn(id) {
        this.userPolicyService.removeUserPolicy(id).subscribe((policy: UserPolicy[]) => {
            this.userPolicies = policy;
            this.click = !this.click;
            //alert('Policy Record removed!');
            this.notifyService.showSuccess('Policy Record removed!','Notification');
            let currentUrl = this.route.url;
            this.route.routeReuseStrategy.shouldReuseRoute = () => false;
            this.route.onSameUrlNavigation = 'reload';
            this.route.navigate([currentUrl]);
        },
            error => {
                console.error('Error!', error);
                //alert('Policy does not exist under this name!');
                this.notifyService.showError('Policy does not exist under this name!','Notification');
                const currentUrl = this.route.url;
                this.route.routeReuseStrategy.shouldReuseRoute = () => false;
                this.route.onSameUrlNavigation = 'reload';
                this.route.navigate([currentUrl]);
            }
        );


    }
    verifyBtn() {
        this.click = !this.click;
        alert('Policy Verified!');
    }
    backBtn(){
        if(this.userRole==='ADMIN'){
            this.route.navigateByUrl('/adminpolicylist');
        }
        else if(this.userRole==='SUPERADMIN'){
            this.route.navigateByUrl('/superadminpolicylist');

        }  
    }

}
