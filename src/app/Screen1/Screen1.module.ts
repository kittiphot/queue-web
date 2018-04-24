import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Screen1RoutingModule } from './Screen1-routing.module';
import { Screen1Component } from './Screen1.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, Screen1RoutingModule],
    declarations: [Screen1Component],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class Screen1Module {}
