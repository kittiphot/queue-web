import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { SettingsService } from '../../shared/services/settings.service'
import { DateTimeService } from '../../shared/services/datetime.service'

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SettingsRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        SettingsComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [
        SettingsService,
        DateTimeService
    ]
})
export class SettingsModule {}
