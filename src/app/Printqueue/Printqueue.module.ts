import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintqueueRoutingModule } from './Printqueue-routing.module';
import { PrintqueueComponent } from './Printqueue.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

@NgModule({
    imports: [CommonModule, PrintqueueRoutingModule],
    declarations: [PrintqueueComponent],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class PrintqueueModule {}
