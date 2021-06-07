import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/common/policy';
import { User } from 'src/common/user';
import { NotificationService } from 'src/services/notification.service';
import { PolicyService } from 'src/services/policy.service';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styles: [`
     .thumbnail {min-height:210px;}
     .pad-left {margin-left:10px;}
     `]

})
export class UsersListComponent implements OnInit {
    searchText = '';
    users: Array<User>;
    roleList: any = ["USER", "ADMIN", "SUPERADMIN"];
    statusList: any = ["ACTIVE", "INACTIVE"];
    constructor(private userService: UserService, private router: Router,
         private route: ActivatedRoute,private notifyService : NotificationService) {
        this.users = [];

    }
    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((userList: User[]) => {
            this.users = userList;
            console.log(this.users);
        });
    }
    removeBtn(id) {
        this.userService.removeUser(id).subscribe((user: User[]) => {
            this.users = user;

            alert('User removed!');
            this.router.navigateByUrl('/userlist');
        },
            error => {
                console.error('Error!', error);
                alert('User does not  exist under this name!');
                const currentUrl = this.route.url;
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate([currentUrl]);
            }
        )

    }

    editBtn(user: User) {
        // this.router.navigateByUrl(`/updateuser/${id}`);
        this.userService.updateUser(user).subscribe(
            response => {
                console.log('Successfully Updated!', response),
                    //alert("Updated Successfully!")
                    this.notifyService.showSuccess('User Modify!','Notification');
                    const currentUrl = this.route.url;
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate([currentUrl]);
            },
            error => {
                console.log(error),
                    //alert("ERROR !!Data not updated");
                    this.notifyService.showError('Updation failed!','Notification');
                    const currentUrl = this.route.url;
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate([currentUrl]);


            });

    }
}



