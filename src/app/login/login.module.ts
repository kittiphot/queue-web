import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthenService } from '../shared/services/authen.service'

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [
        AuthenService
    ]
})
export class LoginModule {}
