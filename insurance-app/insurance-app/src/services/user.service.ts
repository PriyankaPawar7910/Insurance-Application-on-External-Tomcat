import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/common/user';
import { URL } from 'src/url.constant';


@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {

    }
    userLogin(email: string, pwd: string): Observable<boolean>{
        return this.httpClient.get<boolean>(`${URL.userLoginUrl}/${email}/${pwd}`);
    }
    userRegister(userData): Observable<any>{
        return this.httpClient.post<any>(URL.userRegUrl, userData);
    }
    getUserId(email: string): Observable<User>{
        return this.httpClient.get<User>(`${URL.getuserIdUrl}/${email}`);
    }
    getUser(userId: number): Observable<User>{
        return this.httpClient.get<User>(`${URL.getuserUrl}/${userId}`);
    }
    getAllUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>(URL.getAllUsers);
    }
    updateUser(userData): Observable<any>{
        return this.httpClient.put<any>(URL.updateUserUrl, userData);
    }
    removeUser(id: number): Observable<User[]>{
        return this.httpClient.delete<User[]>(`${URL.removeUserUrl}/${id}`);
    }
    getPolicyHolderList(id: number): Observable<User[]>{
        return this.httpClient.get<User[]>(`${URL.policyHolderUrl}/${id}`);
    }


}
