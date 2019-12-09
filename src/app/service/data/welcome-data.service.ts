import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {

  }

  executeHelloWorldBeanService(){
    let url = "http://localhost:8080/helloworldbean/pathvariable/Manish";
    let objectObservable = this.http.get(url);
    return objectObservable;
  }
}
