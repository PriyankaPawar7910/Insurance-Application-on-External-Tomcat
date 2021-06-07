import { Routes } from '@angular/router';
import { Error404Component } from 'src/error/error.component';
import { AboutPageComponent } from 'src/nav/about.component';
import { ContactPageComponent } from 'src/nav/contact.component';
import { HomeComponent } from 'src/nav/home.component';
import { PortfolioComponent } from 'src/nav/portfolio.component';
import { AddPolicyComponent } from 'src/policy/add-policy.component';
import { AdminPlansComponent } from 'src/policy/admin-plan.component';
import { PolicyDetailsBComponent } from 'src/policy/admin-policy-details.component';
import { PolicyListBComponent } from 'src/policy/admin-policy-list.component';
import { CustomerPlansComponent } from 'src/policy/customer-plan.component';
import { PolicyDetailsAComponent } from 'src/policy/policy-details.component';
import { PolicyListAComponent } from 'src/policy/policy-list.component';
import { UpdatePolicyComponent } from 'src/policy/update-policy.component';
import { SuperAdminPlansComponent } from 'src/super-admin/super-admin-plan.component';
import { SuperAdminPolicyListComponent } from 'src/super-admin/super-admin-policy-list.component';
import { UpdateUserComponent } from 'src/super-admin/update-user.component';
import { UsersListComponent } from 'src/super-admin/user-list.component';
import { UserPolicyListComponent } from 'src/user-policies/user-policy-list.component';
import { ViewUserPolicyComponent } from 'src/user-policies/view-user-policy.component';
import { AdminLoginComponent } from 'src/user/admin-login.component';
import { CustomerLoginComponent } from 'src/user/customer-login.component';
import { ProfileComponent } from 'src/user/profile.component';
import { UserRegistrationComponent } from 'src/user/registration.component';
import { AuthenticationGuard } from './authentication.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'admin', component: AdminLoginComponent,canActivate:[AuthenticationGuard]},
    {path: 'customer', component: CustomerLoginComponent,canActivate:[AuthenticationGuard]},
    {path: 'register', component: UserRegistrationComponent},
    {path: 'adminplan', component: AdminPlansComponent,canActivate:[AuthenticationGuard]},
    {path: 'customerplan', component: CustomerPlansComponent,canActivate:[AuthenticationGuard]},
    {path: 'customerpolicylist', component: PolicyListAComponent,canActivate:[AuthenticationGuard]},
    {path: 'adminpolicylist', component: PolicyListBComponent,canActivate:[AuthenticationGuard]},
    {path: 'customerpolicy/:id', component: PolicyDetailsAComponent,canActivate:[AuthenticationGuard]},
    {path: 'adminpolicy/:id', component: PolicyDetailsBComponent,canActivate:[AuthenticationGuard]},
    {path: 'addpolicy', component: AddPolicyComponent,canActivate:[AuthenticationGuard]},
    {path: 'userpolicylist', component: UserPolicyListComponent,canActivate:[AuthenticationGuard]},
    {path: 'viewuserpolicy', component: ViewUserPolicyComponent,canActivate:[AuthenticationGuard]},
    {path: 'updatepolicy/:id', component: UpdatePolicyComponent,canActivate:[AuthenticationGuard]},
    {path: 'portfolio', component: PortfolioComponent,canActivate:[AuthenticationGuard]},
    {path: 'about', component: AboutPageComponent,canActivate:[AuthenticationGuard]},
    {path: 'contact', component: ContactPageComponent,canActivate:[AuthenticationGuard]},
    {path: 'profile', component: ProfileComponent,canActivate:[AuthenticationGuard]},
    {path: 'superadminpolicylist',component:SuperAdminPolicyListComponent,canActivate:[AuthenticationGuard]},
    {path: 'superadminplan',component:SuperAdminPlansComponent,canActivate:[AuthenticationGuard]},
    {path: 'userlist',component: UsersListComponent,canActivate:[AuthenticationGuard]},
    {path: 'updateuser/:id',component: UpdateUserComponent,canActivate:[AuthenticationGuard]},
    {path: '**', component: Error404Component}

];
