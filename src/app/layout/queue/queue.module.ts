import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { QueueService } from '../../shared/services/queue.service'

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        QueueRoutingModule,
        StatModule
    ],
    declarations: [
        QueueComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [QueueService]
})
export class QueueModule {}
