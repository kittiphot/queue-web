import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Screen2RoutingModule } from './Screen2-routing.module';
import { Screen2Component } from './Screen2.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, Screen2RoutingModule],
    declarations: [Screen2Component],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class Screen2Module {}
