import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserScreen3RoutingModule } from './userScreen3-routing.module';
import { UserScreen3Component } from './userScreen3.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, UserScreen3RoutingModule],
    declarations: [UserScreen3Component],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class UserScreen3Module {}
