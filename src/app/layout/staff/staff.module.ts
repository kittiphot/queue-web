import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { ConfigService } from '../../shared/services/config.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { StaffFormComponent } from './staff.form.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StaffRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [
        StaffComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        StaffFormComponent
    ],
    providers: [ConfigService]
})
export class StaffModule {}
