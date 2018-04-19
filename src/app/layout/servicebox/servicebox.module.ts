import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceboxRoutingModule } from './servicebox-routing.module';
import { ServiceboxComponent } from './servicebox.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { ConfigService } from '../../shared/services/Config.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ServiceboxRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule
    ],
    declarations: [
        ServiceboxComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [ConfigService]
})
export class ServiceboxModule {}
