import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/common/user';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
    user: User;
    userRole: string;
    constructor(private userService: UserService, private router: Router,
        private userAuthService: UserAuthenticateService){
            this.userRole= userAuthService.getUserRole();
    }
    ngOnInit(): void
    {
        this.userService.getUser(+this.userAuthService.getUserId()).subscribe((userInfo: User) => {
            this.user = userInfo;
          });
    }
    backBtn(){
        if(this.userRole==='ADMIN'){
            this.router.navigateByUrl('/adminpolicylist');
        }
        else if(this.userRole==='SUPERADMIN'){
            this.router.navigateByUrl('/superadminpolicylist');

        }
        else if(this.userRole==='USER'){
            this.router.navigateByUrl('/customerpolicylist');

        }
    }

}
