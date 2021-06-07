import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/common/policy';
import { NotificationService } from 'src/services/notification.service';
import { PolicyService } from 'src/services/policy.service';


@Component({
    selector: 'app-update-policy',
    templateUrl: './update-policy.component.html'
})
export class UpdatePolicyComponent implements OnInit {
    policyForm: FormGroup;
    policy: Policy;
    policyList: any = ['Individual Coverage', 'Family Coverage', 'Critical Illness Coverage'
        , 'Accidental Coverage', 'Installment Coverage', 'No Age Limit Coverage'];

    constructor(private router: Router, private route: ActivatedRoute,
        private formBuilder: FormBuilder, private policyService: PolicyService,private notifyService : NotificationService) {

    }
    ngOnInit(): void {
        this.policyService.getPolicy(+this.route.snapshot.params['id']).subscribe((policyInfo: Policy) => {
            this.policy = policyInfo;
            console.log(this.policy);
            this.policyForm.get('policyName').setValue(this.policy.policyName);
            this.policyForm.get('policyDescription').setValue(this.policy.policyDescription);
            this.policyForm.get('policyType').setValue(this.policy.policyType);
            this.policyForm.get('premiumAmount').setValue(this.policy.premiumAmount);
            this.policyForm.get('duration').setValue(this.policy.duration);
        });

        this.policyForm = this.formBuilder.group({
            policyName: ['', [Validators.required, Validators.minLength(3)]],
            policyDescription: ['', [Validators.required, Validators.minLength(5)]],
            policyType: ['', [Validators.required]],
            premiumAmount: ['', [Validators.required, Validators.minLength(5)]],
            duration: ['', [Validators.required, Validators.minLength(1)]],


        });
    }
    get policyName() {
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
            console.log(this.policyForm.value)
            this.policyForm.value.policyId = this.route.snapshot.params['id'];
            this.policyService.updatePolicy(this.policyForm.value)
                .subscribe(
                    response => {
                        console.log('Success!', response),
                            //alert('Updated Successfully!');
                            this.notifyService.showSuccess('Policy Updated!','Notification');
                        this.router.navigateByUrl('/adminpolicylist');
                    },
                    error => {
                        console.error('Error!', error);
                       // alert('Policy update failed!' + error);
                        this.notifyService.showError('Updation Failed!','Notification');
                        this.router.navigateByUrl('/adminpolicylist');

                    }
                );

        }
    }

    cancelBtn() {
        this.router.navigateByUrl('/adminpolicylist');
    }

}
