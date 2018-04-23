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
import { EditStaffComponent } from './edit-staff/edit-staff.component';

import { FormsModule } from '@angular/forms';
import { StaffFormComponent } from './staff.form.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StaffRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        StaffComponent,
        EditStaffComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        StaffFormComponent
    ],
    providers: [ConfigService]
})
export class StaffModule {}
