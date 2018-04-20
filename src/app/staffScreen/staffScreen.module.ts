import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffScreenRoutingModule } from './staffScreen-routing.module';
import { StaffScreenComponent } from './staffScreen.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, StaffScreenRoutingModule],
    declarations: [StaffScreenComponent],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class StaffScreenModule {}
