import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authenticate.service';
import { NotificationService } from 'src/services/notification.service';
import { PolicyService } from 'src/services/policy.service';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';


@Component({
    selector: 'app-add-policy',
    templateUrl: './add-policy.component.html'
})
export class AddPolicyComponent implements OnInit{
    policyForm: FormGroup;
    userRole : string;
    policyList: any = ['Individual Coverage', 'Family Coverage', 'Critical Illness Coverage'
    , 'Accidental Coverage', 'Installment Coverage', 'No Age Limit Coverage'];

    constructor(private route: Router, private formBuilder: FormBuilder, private policyService: PolicyService,
        private authService : UserAuthenticateService,private notifyService : NotificationService) {
            this.userRole = this.authService.getUserRole();

    }
    ngOnInit(): void {
        this.policyForm = this.formBuilder.group({
            policyName: ['', [Validators.required, Validators.minLength(3)]],
            policyDescription: ['', [Validators.required, Validators.minLength(5)]],
            policyType: ['', [Validators.required]],
            premiumAmount: ['', [Validators.required, Validators.minLength(5)]],
            duration: ['', [Validators.required, Validators.minLength(1)]],


        });
    }
    get policyName(){
        return this.policyForm.get('policyName');
    }
    get policyDescription() {
        return this.policyForm.get('policyDescription');
    }
    get policyType() {
        return this.policyForm.get('policyType');
    }
    get premiumAmount() {
        return this.policyForm.get('premiumAmount');
    }
    get duration() {
        return this.policyForm.get('duration');
    }

    onSubmit() {
        if (this.policyForm.valid) {
            console.log(this.policyForm.value);
            this.policyService.addPolicy(this.policyForm.value)
                .subscribe(
                    response => {
                        console.log('Success!', response),
                        //alert('Saved Successfully!');
                        this.notifyService.showSuccess('Policy Saved!','Notification');
                        
                        if(this.userRole==='ADMIN'){
                            this.route.navigateByUrl('/adminpolicylist');
                        }
                        else if(this.userRole==='SUPERADMIN'){
                            this.route.navigateByUrl('/superadminpolicylist');

                        }
                    },
                    error => {
                        console.error('Error!', error);
                        //alert('Policy already exist under this name!');
                        this.notifyService.showError('Policy already exist under this name','Notification');
                        const currentUrl = this.route.url;
                        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
                        this.route.onSameUrlNavigation = 'reload';
                        this.route.navigate([currentUrl]);
                    }
                );

        }
    }

    cancelBtn() {
        if(this.userRole==='ADMIN'){
            this.route.navigateByUrl('/adminpolicylist');
        }
        else if(this.userRole==='SUPERADMIN'){
            this.route.navigateByUrl('/superadminpolicylist');

        }    
    }
}
