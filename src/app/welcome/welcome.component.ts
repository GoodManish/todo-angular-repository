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
      response => this.handleSuccessResponse(response)
    );

    console.log('Last line of getWelcomeMessage()');
  }

  handleSuccessResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromResponse = response.message;
  }

}

