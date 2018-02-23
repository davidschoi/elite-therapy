import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { appRoutingProviders, appRouter } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        appRouter,
        HomeModule
    ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
