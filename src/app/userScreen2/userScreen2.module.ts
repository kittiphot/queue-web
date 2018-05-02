import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserScreen2RoutingModule } from './userScreen2-routing.module';
import { UserScreen2Component } from './userScreen2.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, UserScreen2RoutingModule],
    declarations: [UserScreen2Component],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class UserScreen2Module {}


