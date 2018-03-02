import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ModalModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }
