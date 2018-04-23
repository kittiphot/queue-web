import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceboxRoutingModule } from './servicebox-routing.module';
import { ServiceboxComponent } from './servicebox.component';
import { ServiceboxFormComponent } from './servicebox.form.component';


import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { ConfigService } from '../../shared/services/config.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ServiceboxRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ServiceboxComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ServiceboxFormComponent
    ],
    providers: [ConfigService]
})
export class ServiceboxModule {}
