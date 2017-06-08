import { OAuthService } from 'angular-oauth2-oidc';
import { OktaService } from './../auth/okta.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stormpath, LoginFormModel, LoginService, StormpathErrorResponse } from 'angular-stormpath';
import { Level as LoggerLevel } from 'angular2-logger/app/core/level'; 
import { Logger, Options as LoggerOptions } from 'angular2-logger/app/core/logger';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() 
export class AuthorizedGuard implements CanActivate {
    constructor(private router: Router,
        private logger: Logger, 
        private oauthService: OAuthService,
        private OktaService: OktaService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.logger.debug("Inside AuthorizedGuard");
        let userLoggedIn = false;
        if (userLoggedIn) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }
}