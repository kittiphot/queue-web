import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SettingsFormComponent } from './settingsForm/settingsForm.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SettingsRoutingModule,
        StatModule
    ],
    declarations: [
        SettingsComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        SettingsFormComponent
    ],
    providers: [SettingsService]
})
export class SettingsModule {}
