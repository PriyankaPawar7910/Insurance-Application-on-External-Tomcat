import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() {  
  }  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('userId')
    console.log(!(user === null))
    return !(user === null)
  }
}
