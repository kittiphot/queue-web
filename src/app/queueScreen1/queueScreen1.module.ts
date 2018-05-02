import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueScreen1RoutingModule } from './queueScreen1-routing.module';
import { QueueScreen1Component } from './queueScreen1.component';
import { DateTimeService } from '../shared/services/datetime.service';
import { QueueService } from '../shared/services/queue.service';
import { SettingsService } from '../shared/services/settings.service';

@NgModule({
    imports: [CommonModule, QueueScreen1RoutingModule],
    declarations: [QueueScreen1Component],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]

})
export class QueueScreen1Module {}
