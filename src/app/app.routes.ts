import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AuthorizedGuard } from "app/shared/guards/authorized-guard.service";

const routes: Routes = [
    // Root
    { path: '', component: HomeComponent },
    { path: 'beer-list', 
        canActivate: [ AuthorizedGuard ],
    component: BeerListComponent}

];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);