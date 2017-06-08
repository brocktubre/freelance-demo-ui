import { AuthorizedGuard } from 'app/shared/guards/authorized-guard.service';
import { OktaService } from './shared/auth/okta.service';
import { BeerService } from './shared/beer/beer.service';
import { Router, Routes } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { Logger, Options as LoggerOptions } from 'angular2-logger/app/core/logger';
import { Level as LoggerLevel} from 'angular2-logger/app/core/level';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    OAuthService, 
    Logger,
    BeerService,
    OktaService,
    AuthorizedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private logger: Logger) {
    this.logger.level = LoggerLevel.DEBUG;
  }
}

