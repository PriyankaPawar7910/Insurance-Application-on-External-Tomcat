import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/common/user';
import { NotificationService } from 'src/services/notification.service';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {


    userForm: FormGroup;
    user: User;
    userDetails: User;
    userInfo: User;
    constructor(private route: Router, private formBuilder: FormBuilder,
        private userService: UserService, private userAuthService: UserAuthenticateService,
        private router: ActivatedRoute,private notifyService : NotificationService) {

    }
    ngOnInit(): void {
       
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(8),
            Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}')]]
        });
        // localStorage.setItem('SeesionUser',this.userAuthService.getUserId().toString())
        // console.log(this.userAuthService.getUserId().toString())

    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }

    onSubmit() {

        if (this.userForm.valid) {
            console.log(this.userForm.value);
            this.user = this.userForm.value;
            this.userService.userLogin(this.user.email, this.user.password)
                .subscribe((flag: boolean) => {
                    console.log(flag);
                    if (flag) {
                        this.userService.getUserId(this.user.email).subscribe((user: User) => {
                            this.userInfo = user;
                            console.log(this.userInfo);
                            if(this.userInfo.role==='USER' && this.userInfo.status==='ACTIVE'){
                                this.userAuthService.removeUserId();
                                this.userAuthService.setUserId(this.userInfo.userId);
                                this.userAuthService.removeUserName();
                                this.userAuthService.setUserName(this.userInfo.firstName);
                                this.userAuthService.removeUserRole();
                                this.userAuthService.setUserRole(this.userInfo.role);
                                //alert('Login Successful!');
                                this.notifyService.showSuccess("Login successfull !!", "Notification");
                                this.route.navigateByUrl('/customerplan');
                            }
                            else if(this.userInfo.role==='ADMIN' && this.userInfo.status==='ACTIVE'){
                                this.userAuthService.removeUserId();
                                this.userAuthService.setUserId(this.userInfo.userId);
                                this.userAuthService.removeUserName();
                                this.userAuthService.setUserName(this.userInfo.firstName);
                                this.userAuthService.removeUserRole();
                                this.userAuthService.setUserRole(this.userInfo.role);
                                //alert('Login Successful!');
                                this.notifyService.showSuccess("Login successfull !!", "Notification");
                                this.route.navigateByUrl('/adminplan');
                            }
                            else if(this.userInfo.role==='SUPERADMIN' && this.userInfo.status==='ACTIVE'){
                                this.userAuthService.removeUserId();
                                this.userAuthService.setUserId(this.userInfo.userId);
                                this.userAuthService.removeUserName();
                                this.userAuthService.setUserName(this.userInfo.firstName);
                                this.userAuthService.removeUserRole();
                                this.userAuthService.setUserRole(this.userInfo.role);
                                //alert('Login Successful!');
                                this.notifyService.showSuccess("Login successfull !!", "Notification");
                                this.route.navigateByUrl('/superadminplan');
                            }
                            else if(this.userInfo.status==='INACTIVE'){
                                //alert('You are not authorized!');
                                this.notifyService.showError("Login failed !!", "Notification");
                            }
                            
                            

                        }
                        );

                  

                    }
                     else {
                        this.userService.getUserId(this.user.email).subscribe((user: User) => {
                            this.userInfo = user;
                            console.log(this.userInfo);
                            if(this.userInfo.status==='INACTIVE'){
                                //alert('You are not authorized!');
                                this.notifyService.showError("You are not authorized! !!", "Notification");
                                this.route.navigateByUrl('/home');
                            }
                            else {
                                //alert('Invalid username or password!');
                                this.notifyService.showError("Invalid username or password!", "Notification");
                                this.route.navigateByUrl('/home');
                            }
                         
                        }
                        );
                     }

                });
        }

    }
}

