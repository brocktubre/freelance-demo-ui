import { Component } from '@angular/core';
import { Account, Stormpath } from 'angular-stormpath';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user$: Observable<Account | boolean>;
 
  constructor(private stormpath: Stormpath) {
    this.user$ = this.stormpath.user$;
  }
 
  logout(): void {
    this.stormpath.logout();
  }
}
