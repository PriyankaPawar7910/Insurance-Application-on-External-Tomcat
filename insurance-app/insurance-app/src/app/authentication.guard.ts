import { Injectable } from '@angular/core';
import { AuthguardServiceService } from 'src/app/authguard-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) { }
  canActivate(): boolean {
    if (!this.Authguardservice.isUserLoggedIn()) {  
      this.router.navigateByUrl("/home");  
  }  
  return this.Authguardservice.isUserLoggedIn();  
  }

}
