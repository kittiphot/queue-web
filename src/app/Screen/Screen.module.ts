import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { ScreenRoutingModule } from './Screen-routing.module';
import { ScreenComponent } from './Screen.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'
import { QueueComponent } from '../queue/queue.component';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    imports: [CommonModule, ScreenRoutingModule,NgxQRCodeModule],
    declarations: [ScreenComponent,QueueComponent],
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class ScreenModule {}
