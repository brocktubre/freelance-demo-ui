import { OktaService } from './../shared/auth/okta.service';
import { Logger } from 'angular2-logger/app/core/logger';
import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Array<any>;

  constructor(
      private beerService: BeerService,
      private logger: Logger,
      private oktaService: OktaService) { }

  ngOnInit() {
    this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
      },
      error => this.logger.error(error)
    )
  }

  logout(){
    this.oktaService.logout();
  }
}