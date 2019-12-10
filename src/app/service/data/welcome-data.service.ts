import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {

  }

  executeHelloWorldBeanService(){
    let url = "http://localhost:8080/helloworldbean";
    return this.http.get<HelloWorldBean>(url);
  }

  executeHelloWorldBeanServicewithParam(name){
    let url = `http://localhost:8080/helloworldbean/pathvariable/${name}`;
    return this.http.get<HelloWorldBean>(url);
  }
}

export class HelloWorldBean{

  constructor(public message: string){

  }
}
