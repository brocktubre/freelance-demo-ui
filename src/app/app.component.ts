import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private oauthService: OAuthService) {
    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin;
    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oauthService.clientId = 'QHrdxhOySHaVlVcrDTAA';
    this.oauthService.scope = 'openid profile email';
    // set to true, to receive an id_token via OpenID Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = true;
    this.oauthService.issuer = 'https://dev-480041.oktapreview.com';

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin({});
    });
  }
}
