import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticateService } from 'src/services/user-authenticate.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
    userName: string;

    constructor(private router: Router, public userAuthService: UserAuthenticateService) {
    }
    ngOnInit(): void {
        console.log(this.userName);
        this.userName = this.userAuthService.getUserName();
    }
    logoutBtn(): void {
        this.userAuthService.removeUserName();
        this.userAuthService.setUserName(null);
        this.userAuthService.setUserRole(null);
        console.log(this.userAuthService.getUserName());
        this.userAuthService.logOutUserName();
        this.userAuthService.logOutUserId();
        this.userAuthService.logOutUserRole();
        this.router.navigateByUrl('/home');
    }
    profileBtn(): void{
        this.router.navigateByUrl('/profile');
    }
    aboutBtn(): void {
        this.router.navigateByUrl('/about');
    }
    portfolioBtn(): void {
        this.router.navigateByUrl('/portfolio');
    }
    contactBtn(): void {
        this.router.navigateByUrl('/contact');
    }
    signUpBtn(): void{
        this.router.navigateByUrl('/register');

    }
}
