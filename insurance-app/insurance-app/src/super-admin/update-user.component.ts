import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/common/policy';
import { User } from 'src/common/user';
import { UserService } from 'src/services/user.service';


@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {
    userForm: FormGroup;
    user: User;
    roleList: any = ['USER', 'ADMIN', 'SUPERADMIN'];
    statusList: any = ['ACTIVE','INACTIVE'];

    constructor(private router: Router, private route: ActivatedRoute,
        private formBuilder: FormBuilder, private userService: UserService) {

    }
    ngOnInit(): void {
        this.userService.getUser(+this.route.snapshot.params['id']).subscribe((userInfo: User) => {
            this.user = userInfo;
            console.log(this.user);
            this.userForm.get('firstName').setValue(this.user.firstName);
            this.userForm.get('lastName').setValue(this.user.lastName);
            this.userForm.get('email').setValue(this.user.email);
            this.userForm.get('phone').setValue(this.user.phone);
            this.userForm.get('password').setValue(this.user.password);
            this.userForm.get('city').setValue(this.user.city);
            this.userForm.get('role').setValue(this.user.role);
            this.userForm.get('status').setValue(this.user.status);
        });

        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(8)
            , Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]],
            phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            city: ['', [Validators.required, Validators.minLength(3)]],
            role: ['', [Validators.required]],
            status: ['', [Validators.required]]


        });
    }
    
    get firstName() {
        return this.userForm.get('firstName');
    }
    get lastName() {
        return this.userForm.get('lastName');
    }
    get email() {
        return this.userForm.get('email');
    }
    get phone() {
        return this.userForm.get('phone');
    }
    get password() {
        return this.userForm.get('password');
    }

    get city(){
        return this.userForm.get('city');
    }
    get role(){
        return this.userForm.get('role');
    }
    get status(){
        return this.userForm.get('status');
    }




    onSubmit() {
        if (this.userForm.valid) {
            console.log(this.userForm.value)
            this.userForm.value.userId = this.route.snapshot.params['id'];
            this.userService.updateUser(this.userForm.value)
                .subscribe(
                    response => {
                        console.log('Success!', response),
                            alert('Updated Successfully!');
                        this.router.navigateByUrl('/userlist');
                    },
                    error => {
                        console.error('Error!', error);
                        alert('Policy update failed!' + error);
                        this.router.navigateByUrl('/userlist');

                    }
                );

        }
    }

    cancelBtn() {
        this.router.navigateByUrl('/userlist');
    }

}
