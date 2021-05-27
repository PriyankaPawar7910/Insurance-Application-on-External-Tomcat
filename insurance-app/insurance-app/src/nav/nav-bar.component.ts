import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { UserAuthenticateService } from "src/services/user-authenticate.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html'
    
})
export class NavBarComponent implements OnInit{
    userName : string

    constructor(private router:Router,public userAuthService:UserAuthenticateService){
  
    }
    ngOnInit(){
        
        console.log(this.userName)
        this.userName = this.userAuthService.getUserName();
    }
    logoutBtn(){
        this.userAuthService.removeUserName();
        this.userAuthService.setUserName(null);
        console.log(this.userAuthService.getUserName())
         this.userAuthService.logOutUserName()
         this.userAuthService.logOutUserId()
         this.router.navigateByUrl('/home')
    }
    profileBtn(){
        this.router.navigateByUrl('/profile')
    }
    aboutBtn(){
        this.router.navigateByUrl('/about')
    }
    portfolioBtn(){
        this.router.navigateByUrl('/portfolio')
    }
    contactBtn(){
        this.router.navigateByUrl('/contact')
    }

    
}