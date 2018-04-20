import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserScreenRoutingModule } from './userScreen-routing.module';
import { UserScreenComponent } from './userScreen.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, UserScreenRoutingModule],
    declarations: [UserScreenComponent],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class UserScreenModule {}
