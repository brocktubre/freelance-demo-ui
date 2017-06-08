import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
    // Root
    { path: 'home', component: HomeComponent},
    { path: 'beer-list', component: BeerListComponent}

];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);