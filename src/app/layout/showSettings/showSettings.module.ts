import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ShowSettingsRoutingModule } from './showSettings-routing.module';
import { ShowSettingsComponent } from './showSettings.component';
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
        ShowSettingsRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        ShowSettingsComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [
        SettingsService,
        DateTimeService
    ]
})
export class ShowSettingsModule {}
