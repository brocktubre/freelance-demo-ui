import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/app/core/logger';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
declare let OktaAuth: any;

@Injectable()
export class OktaService {
  private user$: Observable<any | boolean>;

  constructor(
    private oauthService: OAuthService, 
    private router: Router, 
    private logger: Logger,
  ) { }  

  login(un: String, pw: String){
    this.oauthService.createAndSaveNonce().then(nonce => {
      const authClient = new OktaAuth({
        url: 'https://dev-480041.oktapreview.com'
      });
      authClient.signIn({
        username: un,
        password: pw
      }).then((response) => {
        if (response.status === 'SUCCESS') {
          authClient.token.getWithoutPrompt({
            clientId: 'QHrdxhOySHaVlVcrDTAA',
            responseType: ['id_token', 'token'],
            scopes: ['openid', 'profile', 'email'],
            sessionToken: response.sessionToken,
            nonce: nonce,
            redirectUri: window.location.origin
          })
            .then((tokens) => {
              this.user$ = response.user;
              this.oauthService.processIdToken(tokens[0].idToken, tokens[1].accessToken);
              let some = this.oauthService.getIdToken();
              debugger;
              this.router.navigate(['beer-list']);
            })
            .catch(error => {
              this.logger.error(error)
            });
        } else {
          throw new Error('We cannot handle the ' + response.status + ' status');
        }
      }).fail(function (err) {
        this.logger.error(err);
      });
    });
  }

  logout(){
    this.oauthService.logOut();
    this.router.navigate(['/']);
  }

}
