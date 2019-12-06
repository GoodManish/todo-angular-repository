import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(myPassword, myUsername) {
    // console.log("Before :: "+this.isUserLoggedIn())
    if (myPassword == '123' && myUsername == 'in28min') {
      sessionStorage.setItem('authenticatedUser',myUsername);
      // console.log("After :: "+this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user==null);
  }
}
