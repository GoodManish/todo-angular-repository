import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(myPassword, myUsername) {
    if (myPassword == '123' && myUsername == 'in28min') {
      sessionStorage.setItem('authenticatedUser',myUsername);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user==null);
  }
}
