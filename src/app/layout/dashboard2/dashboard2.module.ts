import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Dashboard2RoutingModule } from './dashboard2-routing.module';
import { Dashboard2Component } from './dashboard2.component';



import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { ConfigService } from '../../shared/services/Config.service'
import { QueueService } from '../../shared/services/Queue.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        Dashboard2RoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        Dashboard2Component,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,

    ],
    providers: [ConfigService,QueueService]
})
export class Dashboard2Module {}
