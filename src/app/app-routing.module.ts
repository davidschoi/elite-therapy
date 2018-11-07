import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    // {
    //     path: 'services',
    //     loadChildren: './services/services.module#ServicesModule'
    // },
    // {
    //     path: 'faq',
    //     loadChildren: './faq/faq.module#FaqModule'
    // },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
];

export const appRoutingProviders: any[] = [];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
});
