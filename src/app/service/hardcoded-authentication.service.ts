import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(myPassword, myUsername) {
    if (myPassword == '123' && myUsername == 'in28min') {
      return true;
    }
    return false;
  }
}
