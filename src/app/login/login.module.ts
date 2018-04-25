import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthenService } from '../shared/services/authen.service'
import { ConfigService } from '../shared/services/config.service'
import { SettingsService } from '../shared/services/settings.service'

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [
        AuthenService,
        ConfigService,
        SettingsService
    ]
})
export class LoginModule {}
