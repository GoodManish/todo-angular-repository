import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUsername: string = "in28min";
  myPassword: string = "";
  errorMessage="Invalid Credential!!!";
  invalidCredential = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

   handleLogin(){
    // console.log(this.myUsername);
    // console.log(this.myPassword);
    if(this.myPassword=="123" && this.myUsername=="in28min"){
         this.router.navigate(['welcome', this.myUsername])
         this.invalidCredential=false;
    }else{
      this.invalidCredential=true;
    }
  }

}
