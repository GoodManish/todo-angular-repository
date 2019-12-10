import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome Message...';
  welcomeMessageFromResponse: string;
  name = '';

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {
  }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  getWelcomeMessageWithParam() {
    this.welcomeDataService.executeHelloWorldBeanServicewithParam(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  handleSuccessResponse(response) {
    this.welcomeMessageFromResponse = response.message;
  }

  private handleErrorResponse(error) {
    console.log(error)
    console.log(error.error)
    console.log("errorMessage : "+error.error.message)
    console.log("statusCode : "+error.error.status)
    this.welcomeMessageFromResponse= error.error.message;
  }
}

