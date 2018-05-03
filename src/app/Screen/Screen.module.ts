import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './Screen-routing.module';
import { ScreenComponent } from './Screen.component';
import { QueueService } from '../shared/services/queue.service'
import { SettingsService } from '../shared/services/settings.service'
import { DateTimeService } from '../shared/services/datetime.service'

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    imports: [CommonModule, ScreenRoutingModule,QRCodeModule],
    declarations: [ScreenComponent,],
    
    providers: [
        QueueService,
        SettingsService,
        DateTimeService
    ]
})
export class ScreenModule {}
