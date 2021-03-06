import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUsername: string = "in28minutes";
  myPassword: string = "";
  errorMessage="Invalid Credential!!!";
  invalidCredential = false;

  constructor(private router : Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

   handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.myPassword,this.myUsername)){
         this.router.navigate(['welcome', this.myUsername])
         this.invalidCredential=false;
    }else{
      this.invalidCredential=true;
    }
  }

}
