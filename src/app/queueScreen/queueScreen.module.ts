import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueScreenRoutingModule } from './queueScreen-routing.module';
import { QueueScreenComponent } from './queueScreen.component';
import { DateTimeService } from '../shared/services/datetime.service';
import { QueueService } from '../shared/services/queue.service';
import { SettingsService } from '../shared/services/settings.service';

@NgModule({
    imports: [CommonModule, QueueScreenRoutingModule],
    declarations: [QueueScreenComponent],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]

})
export class QueueScreenModule {}
