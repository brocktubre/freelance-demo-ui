import { OktaService } from './../shared/auth/okta.service';
import { Logger } from 'angular2-logger/app/core/logger';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
declare let OktaAuth: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  username: String;
  password: String;
  loginFailed: Boolean = false;

  constructor(
    private oauthService: OAuthService, 
    private router: Router, 
    private logger: Logger,
    private oktaService: OktaService) {
  }

  ngOnInit(){
    this.logger.info('HomeComponent init.. ');
  }

  loginWithPassword() {
    this.oktaService.login(this.username, this.password);
  }
}